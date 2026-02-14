export type MBTIType =
  | "ISTJ"
  | "ISFJ"
  | "INFJ"
  | "INTJ"
  | "ISTP"
  | "ISFP"
  | "INFP"
  | "INTP"
  | "ESTP"
  | "ESFP"
  | "ENFP"
  | "ENTP"
  | "ESTJ"
  | "ESFJ"
  | "ENFJ"
  | "ENTJ";

export const MBTI_TYPES: MBTIType[] = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

export const MBTI_DESCRIPTIONS: Record<MBTIType, string> = {
  ISTJ: "청렴결백한 논리주의자",
  ISFJ: "용감한 수호자",
  INFJ: "통찰력 있는 선지자",
  INTJ: "용의주도한 전략가",
  ISTP: "만능 재주꾼",
  ISFP: "호기심 많은 예술가",
  INFP: "열정적인 중재자",
  INTP: "논리적인 사색가",
  ESTP: "모험을 즐기는 사업가",
  ESFP: "자유로운 영혼의 연예인",
  ENFP: "재기발랄한 활동가",
  ENTP: "뜨거운 논쟁을 즐기는 변론가",
  ESTJ: "엄격한 관리자",
  ESFJ: "사교적인 외교관",
  ENFJ: "정의로운 사회운동가",
  ENTJ: "대담한 통솔자",
};

// Simple compatibility matrix (5 = Best, 1 = Worst)
// This is a simplified version.
export const COMPATIBILITY: Partial<
  Record<MBTIType, Partial<Record<MBTIType, number>>>
> = {
  // Just filling with some logic for demo
  INFP: { ENFJ: 5, ENTJ: 5, INFP: 4, ESTJ: 1 },
  ENFJ: { INFP: 5, ISFP: 5, ENFJ: 4, ISTJ: 2 },
  // ... (Full matrix would be huge, so we'll use a functional approximation for demo)
};

// Fallback logic generator if specific pair is missing
export function getCompatibilityScore(a: MBTIType, b: MBTIType): number {
  if (a === b) return 3; // Same type is soso

  // Logic:
  // N and S clash often (1 point penalty)
  // J and P clash detailedly (1 point penalty)
  // E and I complement (1 point bonus)
  // T and F clash (1 point penalty)

  let score = 3;
  if (a[0] !== b[0]) score += 1; // E vs I complement
  if (a[1] !== b[1]) score -= 1; // S vs N clash
  if (a[2] !== b[2]) score += 0; // T vs F depends
  if (a[3] !== b[3]) score += 1; // J vs P complement sometimes

  // Normalize
  return Math.min(Math.max(score, 1), 5);
}

export function getCompatibilityResult(typeA: MBTIType, typeB: MBTIType) {
  const score = getCompatibilityScore(typeA, typeB); // 1 to 5

  let title = "";
  let desc = "";

  switch (score) {
    case 5:
      title = "천생연분! 환상의 짝꿍";
      desc =
        "눈빛만 봐도 통하는 사이! 서로 부족한 점을 완벽하게 채워주는 최고의 궁합입니다.";
      break;
    case 4:
      title = "꽤 잘 맞는 좋은 인연";
      desc =
        "가치관이 비슷해서 대화가 잘 통해요. 조금만 배려하면 평생 갈 수 있는 사이!";
      break;
    case 3:
      title = "쏘쏘~ 무난한 관계";
      desc =
        "서로 다른 점도 있지만, 그게 매력으로 다가올 수 있어요. 맞춰가는 재미가 있는 사이.";
      break;
    case 2:
      title = "노력이 필요한 사이";
      desc =
        "성격 차이가 좀 있어요. 서로의 다름을 인정하고 이해하려는 노력이 필요해요.";
      break;
    case 1:
      title = "파국...일지도?";
      desc = "만나면 싸우기 바쁜 앙숙 케미! 하지만 싸우면서 정들 수도...?";
      break;
  }

  return { score: score * 20, title, desc }; // score as percentage
}
