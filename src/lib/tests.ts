export type Question = {
  id: number;
  text: string;
  answers: {
    text: string;
    score: Record<string, number>; // e.g., { E: 1, I: 0 } or { typeA: 2 }
  }[];
};

export type TestResult = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  minScore?: number;
  maxScore?: number;
  type?: string; // For MBTI style mapping
};

export type Test = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: "personality" | "love" | "work";
  viewCount: number;
  questions: Question[];
  results: TestResult[];
};

export const tests: Test[] = [
  {
    id: "fruit-personality",
    title: "나와 닮은 과일 찾기",
    description: "상큼한 과일로 알아보는 나의 성격 유형 테스트",
    category: "personality",
    viewCount: 12500,
    questions: [
      {
        id: 1,
        text: "쉬는 날, 당신이 선호하는 계획은?",
        answers: [
          { text: "집에서 넷플릭스 보며 뒹굴거리기", score: { I: 1 } },
          { text: "친구들과 핫플 카페 투어", score: { E: 1 } },
        ],
      },
      {
        id: 2,
        text: "처음 보는 사람에게 나는?",
        answers: [
          { text: "먼저 말을 걸고 분위기를 주도한다", score: { E: 1 } },
          { text: "상대방이 말 걸 때까지 기다린다", score: { I: 1 } },
        ],
      },
      {
        id: 3,
        text: "여행 계획을 짤 때 나는?",
        answers: [
          { text: "분 단위로 엑셀에 정리한다", score: { J: 1 } },
          { text: "대충 큰 틀만 잡고 떠난다", score: { P: 1 } },
        ],
      },
    ],
    results: [
      {
        id: "strawberry",
        title: "상큼발랄 딸기",
        description:
          "어디서나 사랑받는 인싸! 분위기 메이커인 당신은 딸기입니다.",
        type: "E",
      },
      {
        id: "blueberry",
        title: "신비로운 블루베리",
        description:
          "조용하지만 알찬 매력의 소유자. 혼자만의 시간을 즐기는 당신은 블루베리입니다.",
        type: "I",
      },
    ],
  },
  {
    id: "love-style",
    title: "나의 연애 스타일 진단",
    description: "나는 어떤 연애를 추구할까? 연애 세포 진단하기",
    category: "love",
    viewCount: 8900,
    questions: [
      {
        id: 1,
        text: "연인과 연락 문제로 다퉜다. 당신은?",
        answers: [
          { text: "바로 전화해서 푼다", score: { active: 1 } },
          { text: "생각할 시간을 갖는다", score: { passive: 1 } },
        ],
      },
    ],
    results: [
      {
        id: "fire",
        title: "불같은 사랑꾼",
        description: "직진 본능! 사랑하면 물불 안 가리는 스타일",
        type: "active",
      },
      {
        id: "water",
        title: "잔잔한 사랑꾼",
        description: "서서히 스며드는 사랑을 추구하는 스타일",
        type: "passive",
      },
    ],
  },
];

export function getTestById(id: string): Test | undefined {
  return tests.find((test) => test.id === id);
}

export function getAllTests(): Test[] {
  return tests;
}
