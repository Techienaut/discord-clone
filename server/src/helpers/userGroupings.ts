const selectRecurse = (
  currSet: string[],
  maxSlotsParam: number
): string[][] => {
  let maxSlots = maxSlotsParam;
  const currItem = currSet[0];

  //Base Case
  if (maxSlots === 0 || currSet.length === 0) {
    return [[]];
  }

  let nextMaxSlots = maxSlots - 1;
  let groups = [];
  for (let nextIndex = 1; nextIndex <= currSet.length; nextIndex++) {
    const nextSlicedSet = currSet.slice(nextIndex);

    //Exit loop early if you have more slots than future sliced sets can handle.
    if (nextMaxSlots > nextSlicedSet.length) {
      break;
    }

    let currGroups = selectRecurse(nextSlicedSet, nextMaxSlots).map((value) => {
      return [currItem, ...value];
    });
    groups.push(...currGroups);

    // No Double/Tripple/Quad/Etc-Counting base cases
    if (nextMaxSlots === 0 || nextSlicedSet.length === 0) {
      break;
    }
  }
  return groups;
};

const userGrouping = (usernamesParam: string[]): string[][] => {
  let usernames = [...usernamesParam];
  let groups: string[][] = [];
  usernames.forEach((value, index, usernames) => {
    const currSet = usernames.slice(index);
    for (let maxSlots = currSet.length; maxSlots >= 1; maxSlots--) {
      groups.push(...selectRecurse(currSet, maxSlots));
    }
  });
  return groups;
};

const usernames = ["Anthony", "Britney", "Charlie", "Dana"];
const groups = userGrouping(usernames);

console.log(JSON.stringify(groups));
