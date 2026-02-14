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
  longDescription?: string;
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
        imageUrl: "/images/fruit_strawberry.svg",
      },
      {
        id: "blueberry",
        title: "신비로운 블루베리",
        description:
          "조용하지만 알찬 매력의 소유자. 혼자만의 시간을 즐기는 당신은 블루베리입니다.",
        type: "I",
        imageUrl: "/images/fruit_blueberry.svg",
      },
    ],
    longDescription: `
      <h2>과일로 알아보는 나의 성격 유형</h2>
      <p>
        사람은 저마다 고유한 향기와 맛을 지닌 과일과 같습니다. 
        어떤 사람은 톡 쏘는 레몬처럼 상큼하고, 어떤 사람은 묵직한 수박처럼 든든하죠.
      </p>
      <p>
        간단한 3가지 질문을 통해 당신이 어떤 과일과 가장 닮았는지 알아보세요. 
        당신의 숨겨진 매력과 성향을 과일에 비유하여 재미있게 풀어드립니다. 
        친구들과 결과를 공유하며 서로 어떤 과일인지 비교해보는 것도 꿀잼 포인트!
      </p>
    `,
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
        text: "좋아하는 사람이 생기면 나는?",
        answers: [
          { text: "티 안 나게 관찰한다", score: { observant: 1 } },
          { text: "바로 연락하고 친해진다", score: { direct: 1 } },
          { text: "친구들한테 상담부터 한다", score: { stable: 1 } },
          { text: "상대가 먼저 다가오길 기다린다", score: { observant: 1 } },
        ],
      },
      {
        id: 2,
        text: "데이트 계획 스타일은?",
        answers: [
          { text: "완벽 코스 짜는 계획형", score: { stable: 1 } },
          { text: "대충 만나서 그때 정함", score: { free: 1 } },
          { text: "상대 취향 맞춤형", score: { observant: 1 } },
          { text: "집 데이트가 최고", score: { stable: 1 } },
        ],
      },
      {
        id: 3,
        text: "연락 텀에 대한 생각은?",
        answers: [
          { text: "빠르면 빠를수록 좋다", score: { direct: 1 } },
          { text: "적당히만 하면 된다", score: { stable: 1 } },
          { text: "하루 한 번이면 충분", score: { observant: 1 } },
          { text: "연락보다 실제 만남이 중요", score: { free: 1 } },
        ],
      },
      {
        id: 4,
        text: "연애할 때 가장 중요한 건?",
        answers: [
          { text: "설렘", score: { direct: 1 } },
          { text: "안정감", score: { stable: 1 } },
          { text: "재미", score: { free: 1 } },
          { text: "신뢰", score: { stable: 1 } },
        ],
      },
      {
        id: 5,
        text: "싸웠을 때 나는?",
        answers: [
          { text: "바로 풀고 싶다", score: { direct: 1 } },
          { text: "시간 두고 생각한다", score: { observant: 1 } },
          { text: "장난으로 분위기 푼다", score: { free: 1 } },
          { text: "먼저 사과는 잘 못 한다", score: { observant: 1 } },
        ],
      },
    ],
    results: [
      {
        id: "direct",
        title: "불도저 직진러",
        description:
          "좋아하면 앞뒤 안 가리고 직진! 솔직하고 적극적인 당신은 사랑쟁이입니다.",
        type: "direct",
        imageUrl: "/images/love_direct.svg",
      },
      {
        id: "stable",
        title: "포근한 안정러",
        description:
          "신뢰와 안정이 최우선! 한번 연애하면 오래가는 진국 스타일입니다.",
        type: "stable",
        imageUrl: "/images/love_stable.svg",
      },
      {
        id: "free",
        title: "자유로운 영혼",
        description:
          "구속은 NO! 같이 있으면 재밌고 즐거운 친구 같은 연애를 선호합니다.",
        type: "free",
        imageUrl: "/images/love_free.svg",
      },
      {
        id: "observant",
        title: "신중한 관찰러",
        description:
          "돌다리도 두들겨 보고 건너는 스타일. 마음을 여는 데 시간이 걸리지만 내 사람에겐 따뜻합니다.",
        type: "observant",
        imageUrl: "/images/love_observant.svg",
      },
    ],
    longDescription: `
      <h2>나의 연애 스타일은 과연?</h2>
      <p>연애를 할 때 나는 어떤 모습일까요? 좋아하는 사람 앞에서 나도 모르게 나오는 행동들이 나의 진짜 연애 스타일을 말해줍니다.</p>
      <p>
        이 테스트는 평소 당신의 행동 패턴과 가치관을 분석하여 가장 잘 어울리는 연애 스타일을 진단해 드립니다. 
        적극적인 직진러인지, 신중한 관찰러인지, 아니면 자유를 꿈꾸는 영혼인지 지금 바로 확인해보세요!
      </p>
      <h3>이런 분들에게 추천합니다</h3>
      <ul>
        <li>내 연애 패턴이 궁금하신 분</li>
        <li>썸 타는 그 사람의 행동이 이해가 안 되시는 분</li>
        <li>나와 잘 맞는 연애 상대가 어떤 타입인지 알고 싶은 분</li>
      </ul>
    `,
  },
];

export function getTestById(id: string): Test | undefined {
  return tests.find((test) => test.id === id);
}

export function getAllTests(): Test[] {
  return tests;
}
