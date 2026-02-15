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
  emoji?: string;
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
    emoji: "🍓",
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
    emoji: "💖",
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
  {
    id: "playground-type",
    title: "심테랜드 놀이터 유형 테스트",
    description:
      "나는 어떤 놀이터에서 가장 행복할까? 나에게 딱 맞는 심테랜드 공간 찾기!",
    emoji: "🎢",
    category: "personality",
    viewCount: 3200,
    questions: [
      {
        id: 1,
        text: "아침에 눈 뜰 때 기분은?",
        answers: [
          { text: "상쾌하게 기지개 🌞", score: { A: 1 } },
          { text: "조금 더 자기 😪", score: { B: 1 } },
          { text: "꿈속에 머물고 싶은 느낌 💭", score: { C: 1 } },
          { text: "계획 세우고 싶은 의욕 💡", score: { D: 1 } },
        ],
      },
      {
        id: 2,
        text: "지금 먹고 싶은 간식은?",
        answers: [
          { text: "달콤한 케이크 🍰", score: { A: 1 } },
          { text: "짭짤한 과자 🍿", score: { B: 1 } },
          { text: "시원한 음료수 🧃", score: { C: 1 } },
          { text: "건강한 과일 🍎", score: { D: 1 } },
        ],
      },
      {
        id: 3,
        text: "친구와 놀 때 나는?",
        answers: [
          { text: "분위기 메이커 🎉", score: { A: 1 } },
          { text: "듣는 편! 👂", score: { B: 1 } },
          { text: "조용히 관찰자 🪐", score: { C: 1 } },
          { text: "계획 세우는 역할 📋", score: { D: 1 } },
        ],
      },
      {
        id: 4,
        text: "네 방을 한 단어로 표현하면?",
        answers: [
          { text: "활기찬 공간 🎨", score: { A: 1 } },
          { text: "편안한 휴식처 🛋️", score: { B: 1 } },
          { text: "비밀스러운 아지트 🗝️", score: { C: 1 } },
          { text: "정리 정돈 깔끔 🤓", score: { D: 1 } },
        ],
      },
      {
        id: 5,
        text: "가장 좋아하는 날씨는?",
        answers: [
          { text: "화창한 봄날 🌸", score: { A: 1 } },
          { text: "비 오는 오후 ☔", score: { B: 1 } },
          { text: "밤하늘 가득 별빛 ✨", score: { C: 1 } },
          { text: "바람 시원한 가을 🍁", score: { D: 1 } },
        ],
      },
      {
        id: 6,
        text: "SNS에 올릴 사진은 주로?",
        answers: [
          { text: "웃는 내 얼굴 😁", score: { A: 1 } },
          { text: "풍경 사진 🌄", score: { B: 1 } },
          { text: "멍한 감성샷 📷", score: { C: 1 } },
          { text: "깔끔한 정리 컷 ✨", score: { D: 1 } },
        ],
      },
      {
        id: 7,
        text: "다음 중 하고 싶은 활동은?",
        answers: [
          { text: "춤추며 놀기 🕺", score: { A: 1 } },
          { text: "책 읽으며 휴식 📚", score: { B: 1 } },
          { text: "밤 산책 🌙", score: { C: 1 } },
          { text: "목표 리스트 작성 ✏️", score: { D: 1 } },
        ],
      },
      {
        id: 8,
        text: "스트레스를 받으면?",
        answers: [
          { text: "친구에게 털어놓는다 🗣️", score: { A: 1 } },
          { text: "음악 듣는다 🎧", score: { B: 1 } },
          { text: "조용히 잠시 쉰다 😌", score: { C: 1 } },
          { text: "운동이나 정리한다 💪", score: { D: 1 } },
        ],
      },
      {
        id: 9,
        text: "가장 끌리는 색은?",
        answers: [
          { text: "노란색 💛", score: { A: 1 } },
          { text: "파란색 💙", score: { B: 1 } },
          { text: "보랏빛 🌌", score: { C: 1 } },
          { text: "흰색 ⚪", score: { D: 1 } },
        ],
      },
      {
        id: 10,
        text: "자신을 가장 잘 나타내는 말은?",
        answers: [
          { text: "활발함 🌟", score: { A: 1 } },
          { text: "편안함 ☁️", score: { B: 1 } },
          { text: "감성적 🌙", score: { C: 1 } },
          { text: "계획적 📅", score: { D: 1 } },
        ],
      },
    ],
    results: [
      {
        id: "A",
        title: "햇살 놀이터 ☀️",
        description:
          "밝고 활기찬 에너지의 소유자! 사람들과 어울리는 것을 좋아하고 매일 탐험하고 싶은 당신에게 딱 맞는 공간입니다.",
        type: "A",
        imageUrl: "/images/playground_sun.svg",
      },
      {
        id: "B",
        title: "편안 숲속 쉼터 🍃",
        description:
          "마음이 평온하고 휴식을 좋아하는 감성러. 혼자 사유하거나 차분한 활동이 맞는 당신을 위한 힐링 공간입니다.",
        type: "B",
        imageUrl: "/images/playground_forest.svg",
      },
      {
        id: "C",
        title: "은하수 비밀 공간 🌌",
        description:
          "감성적이고 생각이 깊은 당신. 혼자 있는 시간도 즐기고 밤 분위기를 좋아하는 당신만의 비밀 아지트입니다.",
        type: "C",
        imageUrl: "/images/playground_galaxy.svg",
      },
      {
        id: "D",
        title: "정리 정돈 연구소 📊",
        description:
          "계획적이고 깔끔한 당신은 정돈이 행복! 목표 세우기, 루틴 만들기를 좋아하는 당신을 위한 스마트 공간입니다.",
        type: "D",
        imageUrl: "/images/playground_lab.svg",
      },
    ],
    longDescription: `
      <h2>나에게 딱 맞는 심테랜드 놀이터는?</h2>
      <p>
        사람마다 편안함을 느끼고 즐거워하는 공간이 다릅니다. 
        어떤 사람은 시끌벅적한 파티룸을 좋아하고, 어떤 사람은 조용한 서재를 선호하죠.
      </p>
      <p>
        10가지 질문을 통해 당신의 성향을 분석하고, 심테랜드에서 가장 잘 어울리는 놀이 공간을 추천해 드립니다.
        결과에 따라 맞춤형 콘텐츠(일기장, 챌린지, 비밀 노트 등)도 함께 확인해보세요!
      </p>
    `,
  },
  {
    id: "human-brain",
    title: "너의 뇌는 몇 % 인간인가?",
    description:
      "당신은 정말 인간일까…? 15개의 질문으로 당신의 뇌 정체를 분석합니다.",
    emoji: "🧠",
    category: "personality",
    viewCount: 1540,
    questions: [
      {
        id: 1,
        text: "길 가다 돌 있으면?",
        answers: [
          { text: "차본다", score: { human: 2 } },
          { text: "피해서 간다", score: { npc: 2 } },
          { text: "왜 있는지 관찰", score: { alien: 2 } },
          { text: "들고 간다", score: { cat: 2 } },
        ],
      },
      {
        id: 2,
        text: "혼자 있을 때 가장 많이 하는 행동",
        answers: [
          { text: "노래 부름", score: { human: 2 } },
          { text: "아무 생각 없음", score: { npc: 2 } },
          { text: "상상함", score: { alien: 2 } },
          { text: "계획 세움", score: { cat: 2 } },
        ],
      },
      {
        id: 3,
        text: "갑자기 5억 생기면?",
        answers: [
          { text: "여행", score: { human: 2 } },
          { text: "저축", score: { npc: 2 } },
          { text: "실험해봄", score: { alien: 2 } },
          { text: "투자 계획표 작성", score: { cat: 2 } },
        ],
      },
      {
        id: 4,
        text: "친구가 울면?",
        answers: [
          { text: "같이 울어줌", score: { human: 2 } },
          { text: "위로함", score: { npc: 2 } },
          { text: "왜 우는지 분석", score: { alien: 2 } },
          { text: "해결책 제시", score: { cat: 2 } },
        ],
      },
      {
        id: 5,
        text: "밤 3시에 깼다",
        answers: [
          { text: "폰함", score: { human: 2 } },
          { text: "다시 잠", score: { npc: 2 } },
          { text: "창밖 봄", score: { alien: 2 } },
          { text: "내일 일정 생각", score: { cat: 2 } },
        ],
      },
      {
        id: 6,
        text: "엘베 거울 보면?",
        answers: [
          { text: "표정 체크", score: { human: 2 } },
          { text: "그냥 있음", score: { npc: 2 } },
          { text: "눈싸움함", score: { alien: 2 } },
          { text: "자세 교정", score: { cat: 2 } },
        ],
      },
      {
        id: 7,
        text: "가장 무서운 것",
        answers: [
          { text: "혼자 있음", score: { human: 2 } },
          { text: "돈 없음", score: { npc: 2 } },
          { text: "정체 모름", score: { alien: 2 } },
          { text: "계획 망함", score: { cat: 2 } },
        ],
      },
      {
        id: 8,
        text: "노래 들을 때",
        answers: [
          { text: "감정 몰입", score: { human: 2 } },
          { text: "배경음", score: { npc: 2 } },
          { text: "세계관 상상", score: { alien: 2 } },
          { text: "가사 분석", score: { cat: 2 } },
        ],
      },
      {
        id: 9,
        text: "심심할 때",
        answers: [
          { text: "친구 연락", score: { human: 2 } },
          { text: "누워있기", score: { npc: 2 } },
          { text: "이상한 생각", score: { alien: 2 } },
          { text: "할 일 찾기", score: { cat: 2 } },
        ],
      },
      {
        id: 10,
        text: "시험 전날",
        answers: [
          { text: "벼락치기", score: { human: 2 } },
          { text: "포기", score: { npc: 2 } },
          { text: "시험 의미 고민", score: { alien: 2 } },
          { text: "계획표 만듦", score: { cat: 2 } },
        ],
      },
      {
        id: 11,
        text: "길 잃으면",
        answers: [
          { text: "사람에게 물음", score: { human: 2 } },
          { text: "지도 봄", score: { npc: 2 } },
          { text: "일부러 더 돌아다님", score: { alien: 2 } },
          { text: "경로 분석", score: { cat: 2 } },
        ],
      },
      {
        id: 12,
        text: "누가 쳐다보면",
        answers: [
          { text: "웃어줌", score: { human: 2 } },
          { text: "무시", score: { npc: 2 } },
          { text: "이유 상상", score: { alien: 2 } },
          { text: "시선 계산", score: { cat: 2 } },
        ],
      },
      {
        id: 13,
        text: "좋아하는 색",
        answers: [
          { text: "밝은색", score: { human: 2 } },
          { text: "무채색", score: { npc: 2 } },
          { text: "보라/특이색", score: { alien: 2 } },
          { text: "흰색", score: { cat: 2 } },
        ],
      },
      {
        id: 14,
        text: "갑자기 비 오면",
        answers: [
          { text: "뛰어감", score: { human: 2 } },
          { text: "비 맞음", score: { npc: 2 } },
          { text: "감성 느낌", score: { alien: 2 } },
          { text: "날씨앱 확인", score: { cat: 2 } },
        ],
      },
      {
        id: 15,
        text: "자신을 한마디로",
        answers: [
          { text: "사람 좋아함", score: { human: 2 } },
          { text: "무난함", score: { npc: 2 } },
          { text: "이상함", score: { alien: 2 } },
          { text: "체계적", score: { cat: 2 } },
        ],
      },
    ],
    results: [
      {
        id: "human",
        title: "정상 인간 👤",
        description:
          "당신은 매우 인간적입니다. 감정·공감·현실감 모두 정상 범주에 속하며, 주변 사람들이 가장 편해하는 타입입니다.",
        type: "human",
        imageUrl: "/images/brain_human.svg",
      },
      {
        id: "cat",
        title: "사람인 척하는 고양이 🐱",
        description:
          "겉은 인간인데 속은 고양이입니다. 자기만의 세계가 확실하고 귀찮은 건 딱 질색! 하고 싶은 것만 하는 자유로운 영혼입니다.",
        type: "cat",
        imageUrl: "/images/brain_cat.svg",
      },
      {
        id: "npc",
        title: "배경 캐릭터 (NPC) 🤖",
        description:
          "당신은 안정형 존재입니다. 세상을 조용히 살아가는 타입이지만, 위기 상황에서는 의외로 핵심적인 역할을 해내는 숨은 고수일지도 모릅니다.",
        type: "npc",
        imageUrl: "/images/brain_npc.svg",
      },
      {
        id: "alien",
        title: "지구 적응 중인 외계인 👽",
        description:
          "사람들과 사고방식이 다릅니다. 독특한 상상력이 폭발하며 가끔 이해 불가한 행동을 하지만, 이런 사람들이 세상을 바꿉니다.",
        type: "alien",
        imageUrl: "/images/brain_alien.svg",
      },
    ],
    longDescription: `
      <h2>자네, 정말 인간인가?</h2>
      <p>
        가끔 내 자신이 너무 기계적으로 느껴지거나, 반대로 남들과 너무 다른 생각을 해서 '내가 이상한가?' 고민해본 적 있나요?
        혹시 당신의 뇌 구조가 남들과 조금 다를지도 모릅니다.
      </p>
      <p>
        15개의 정밀 질문을 통해 당신의 뇌가 인간에 얼마나 가까운지 분석해 드립니다.
        인간 지수(%)와 함께 당신의 진짜 정체(고양이, 외계인, 혹은 NPC?)를 확인해보세요!
      </p>
    `,
  },
  {
    id: "guessing-game",
    title: "AI 정체 맞추기 테스트",
    description:
      "AI가 숨기고 있는 정체를 스무고개로 맞춰보세요! (인물/동물/사물)",
    emoji: "🕵️",
    category: "personality",
    viewCount: 5400,
    questions: [], // Dummy
    results: [], // Dummy
    longDescription:
      "AI가 생각하고 있는 정체를 맞춰보세요. 질문을 던지면 AI가 응/아니/애매해로 대답합니다.",
  },
];

export function getTestById(id: string): Test | undefined {
  return tests.find((test) => test.id === id);
}

export function getAllTests(): Test[] {
  return tests;
}
