export const ZODIACS = [
  "쥐",
  "소",
  "호랑이",
  "토끼",
  "용",
  "뱀",
  "말",
  "양",
  "원숭이",
  "닭",
  "개",
  "돼지",
];

export const CONSTELLATIONS = [
  "물병자리",
  "물고기자리",
  "양자리",
  "황소자리",
  "쌍둥이자리",
  "게자리",
  "사자자리",
  "처녀자리",
  "천칭자리",
  "전갈자리",
  "사수자리",
  "염소자리",
];

export function getDailyFortune(type: string, target: string) {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  // Simple hash for daily consistency
  let hash = 0;
  const seed = dateStr + type + target;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  const score = Math.abs(hash) % 101;
  const luckyColor = ["빨강", "파랑", "노랑", "초록", "보라", "검정", "흰색"][
    Math.abs(hash) % 7
  ];
  const luckyTime = `${Math.abs(hash) % 24}시`;

  let text = "";
  if (score > 90)
    text =
      "오후, 생각지도 못한 행운이 찾아올 수 있습니다. 기회를 놓치지 마세요!";
  else if (score > 70)
    text = "평온한 하루가 예상됩니다. 작은 행복을 만끽하세요.";
  else if (score > 50) text = "무난한 하루입니다. 건강 관리에 유의하세요.";
  else text = "조심스러운 하루가 필요합니다. 언행을 주의하세요.";

  return { score, text, luckyColor, luckyTime };
}
