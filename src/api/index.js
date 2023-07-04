import Chance from "chance";

const chance = Chance();
export const fakeApi = () => {
  console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
};
