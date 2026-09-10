export const interestTypes = [
  "Joining a team",
  "Skills development",
  "Strength & conditioning",
  "Tournament information",
  "Sponsorship",
  "General question",
] as const;

export type InterestType = (typeof interestTypes)[number];

export const basketballPrograms = [
  {
    id: "beginner",
    name: "Beginner Development",
    text: "Build a strong foundation through fundamental skills, confidence, and a love for the game. All skill levels are welcome.",
  },
  {
    id: "advanced",
    name: "Advanced Competition",
    text: "Develop game-ready skills and compete in high-exposure, national tournament settings with a team-first standard.",
  },
] as const;

export type ProgramName = (typeof basketballPrograms)[number]["name"];

export function getInquiryProgram(value: string | string[] | undefined) {
  return basketballPrograms.find((program) => program.id === value);
}

export function needsPlayerDetails(interest: InterestType | "") {
  return interest === "Joining a team" || interest === "Skills development" || interest === "Strength & conditioning";
}
