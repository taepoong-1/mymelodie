export type GuessingGameItem = {
  id: string;
  answer: string;
  category: "people" | "animal" | "food" | "object" | "character";
  traits: string[];
  keywords: string[]; // Words that trigger "Yes"
  difficulty: "easy" | "normal" | "hard";
  initialHints: string[];
};

export const guessingGameData: GuessingGameItem[] = [
  // --- People ---
  {
    id: "p1",
    answer: "아이유",
    category: "people",
    traits: ["가수", "배우", "솔로", "여성", "음악", "보라색", "국민여동생"],
    keywords: ["가수", "노래", "연기", "배우", "여자", "솔로", "유명", "30대"],
    difficulty: "easy",
    initialHints: ["초성: ㅇㅇㅇ", "국민 여동생", "좋은 날"],
  },
  {
    id: "p2",
    answer: "손흥민",
    category: "people",
    traits: ["축구", "운동선수", "토트넘", "캡틴", "남자", "국가대표"],
    keywords: [
      "축구",
      "운동",
      "스포츠",
      "영국",
      "토트넘",
      "남자",
      "공",
      "달리기",
    ],
    difficulty: "easy",
    initialHints: ["초성: ㅅㅎㅁ", "축구 선수", "월드클래스"],
  },
  {
    id: "p3",
    answer: "유재석",
    category: "people",
    traits: ["개그맨", "MC", "무한도전", "런닝맨", "안경", "메뚜기"],
    keywords: ["방송", "티비", "예능", "남자", "안경", "진행", "유명"],
    difficulty: "easy",
    initialHints: ["초성: ㅇㅈㅅ", "국민 MC", "메뚜기"],
  },
  {
    id: "p4",
    answer: "침착맨",
    category: "people",
    traits: ["이말년", "웹툰작가", "스트리머", "유튜버", "수염", "킹받네"],
    keywords: ["방송", "인터넷", "유튜브", "만화", "웹툰", "남자", "수염"],
    difficulty: "normal",
    initialHints: ["초성: ㅊㅊㅁ", "전직 웹툰 작가", "쏘영이 아빠"],
  },
  {
    id: "p5",
    answer: "페이커",
    category: "people",
    traits: ["프로게이머", "롤", "LOL", "대상혁", "T1", "염소"],
    keywords: ["게임", "롤", "리그오브레전드", "컴퓨터", "남자", "우승"],
    difficulty: "normal",
    initialHints: ["초성: ㅍㅇㅋ", "불사대마왕", "LoL GOAT"],
  },

  // --- Animals ---
  {
    id: "a1",
    answer: "강아지",
    category: "animal",
    traits: ["애완동물", "귀여움", "짖음", "산책", "털", "다리4개"],
    keywords: ["동물", "집", "친구", "멍멍", "소리", "귀여운"],
    difficulty: "easy",
    initialHints: ["초성: ㄱㅇㅈ", "인간의 가장 친한 친구", "멍멍"],
  },
  {
    id: "a2",
    answer: "고양이",
    category: "animal",
    traits: ["애완동물", "귀여움", "야옹", "털", "다리4개", "도도함"],
    keywords: ["동물", "집", "친구", "야옹", "소리", "귀여운", "생선"],
    difficulty: "easy",
    initialHints: ["초성: ㄱㅇㅇ", "식빵 굽기", "야옹"],
  },
  {
    id: "a3",
    answer: "호랑이",
    category: "animal",
    traits: ["맹수", "줄무늬", "산", "고양이과", "무서움", "어흥"],
    keywords: ["동물", "야생", "큰", "무서운", "고기", "사냥"],
    difficulty: "normal",
    initialHints: ["초성: ㅎㄹㅇ", "산중호걸", "떡 하나 주면 안 잡아먹지"],
  },
  {
    id: "a4",
    answer: "판다",
    category: "animal",
    traits: ["중국", "대나무", "곰", "푸바오", "흑백", "귀여움"],
    keywords: ["동물", "나무", "풀", "먹방", "잠", "중국"],
    difficulty: "normal",
    initialHints: ["초성: ㅍㄷ", "대나무 먹방", "흑백 사진 아님"],
  },

  // --- Food ---
  {
    id: "f1",
    answer: "김치찌개",
    category: "food",
    traits: ["한국", "매움", "국물", "빨강", "뚝배기", "밥"],
    keywords: [
      "음식",
      "한식",
      "매운",
      "뜨거운",
      "점심",
      "저녁",
      "고기",
      "두부",
    ],
    difficulty: "easy",
    initialHints: ["초성: ㄱㅊㅉㄱ", "한국인의 소울 푸드", "신맛 날 수도 있음"],
  },
  {
    id: "f2",
    answer: "치킨",
    category: "food",
    traits: ["튀김", "닭", "배달", "야식", "맥주", "바삭"],
    keywords: ["음식", "고기", "기름", "저녁", "밤", "맛있는"],
    difficulty: "easy",
    initialHints: ["초성: ㅊㅋ", "맥주랑 단짝", "느님"],
  },
  {
    id: "f3",
    answer: "떡볶이",
    category: "food",
    traits: ["분식", "매움", "빨강", "쫄깃", "오뎅", "길거리"],
    keywords: ["음식", "간식", "매운", "학교", "시장", "순대"],
    difficulty: "easy",
    initialHints: ["초성: ㄸㅂㅇ", "국민 간식", "빨간 맛"],
  },
  {
    id: "f4",
    answer: "아메리카노",
    category: "food",
    traits: ["커피", "카페", "씀", "검정", "얼음", "물"],
    keywords: ["음료", "마시는", "카페인", "잠", "직장인", "차가운", "뜨거운"],
    difficulty: "normal",
    initialHints: ["초성: ㅇㅁㄹㅋㄴ", "직장인의 생명수", "얼어 죽어도"],
  },

  // --- Objects ---
  {
    id: "o1",
    answer: "스마트폰",
    category: "object",
    traits: ["전자기기", "인터넷", "전화", "배터리", "액정", "필수품"],
    keywords: ["기계", "전기", "손", "연락", "게임", "유튜브"],
    difficulty: "easy",
    initialHints: ["초성: ㅅㅁㅌㅍ", "현대인의 필수품", "이거 없으면 불안함"],
  },
  {
    id: "o2",
    answer: "냉장고",
    category: "object",
    traits: ["가전제품", "부엌", "차가움", "음식보관", "전기", "문"],
    keywords: ["가구", "기계", "집", "요리", "얼음", "물"],
    difficulty: "easy",
    initialHints: ["초성: ㄴㅈㄱ", "음식을 신선하게", "코끼리를 넣는 법"],
  },
  {
    id: "o3",
    answer: "지갑",
    category: "object",
    traits: ["돈", "카드", "가죽", "주머니", "신분증"],
    keywords: ["물건", "소지품", "결제", "버스", "가방"],
    difficulty: "normal",
    initialHints: ["초성: ㅈㄱ", "돈을 넣는 곳", "잃어버리면 큰일 남"],
  },

  // --- Characters ---
  {
    id: "c1",
    answer: "피카츄",
    category: "character",
    traits: ["포켓몬", "전기", "노란색", "쥐", "귀여움", "지우"],
    keywords: ["애니", "만화", "게임", "동물", "몬스터", "백만볼트"],
    difficulty: "easy",
    initialHints: ["초성: ㅍㅋㅊ", "전기 쥐", "삐까삐까"],
  },
  {
    id: "c2",
    answer: "뽀로로",
    category: "character",
    traits: ["펭귄", "안경", "어린이", "대통령", "파란색", "눈"],
    keywords: ["애니", "만화", "동물", "새", "친구", "노는게 제일 좋아"],
    difficulty: "easy",
    initialHints: ["초성: ㅃㄹㄹ", "어린이들의 대통령", "노는 게 제일 좋아"],
  },
  {
    id: "c3",
    answer: "아이언맨",
    category: "character",
    traits: ["마블", "히어로", "로봇", "빨강", "부자", "토니스타크"],
    keywords: ["영화", "영웅", "수트", "미국", "과학", "어벤져스"],
    difficulty: "normal",
    initialHints: ["초성: ㅇㅇㅇㅁ", "3000만큼 사랑해", "빨간 수트"],
  },
];
