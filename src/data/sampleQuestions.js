import { questionType } from "constants/constants"

export const sampleQuestions = {
    1: {
        description: {
            text: "규호는 윤건이와 다툰 이후 그에게 당분간 연락하지 말라고 얘기하며 ‘당분간 기간’을 통보한다. ‘당분간 기간’은 약 며칠인가?",
            score: 10,
        },
        type: questionType.multiple,
        answer: [3],
        options: {
            1: {
                text: "7일",
                selected: false,
            },
            2: {
                text: "10일",
                selected: false,
            },
            3: {
                text: "14일",
                selected: false,
            },
            4: {
                text: "21일",
                selected: false,
            },
        },
        satisfied: false,
    },
    2: {
        description: {
            text: "다음 중 규호가 '데이일보' 인턴 합격 문자를 받은 날의 날짜는?",
            score: 10,
        },
        type: questionType.multiple,
        answer: [3],
        options: {
            1: {
                text: "7월 6일",
                selected: false,
            },
            2: {
                text: "7월 7일",
                selected: false,
            },
            3: {
                text: "7월 8일",
                selected: false,
            },
            4: {
                text: "7월 9일",
                selected: false,
            },
        },
        satisfied: false,
    },
    3: {
        description: {
            text: "규호는 여행부대에서 간 거제 여행에서 윤건에게 고백하였다. 다음 중 규호가 고백한 날의 요일은?",
            score: 10,
        },
        type: questionType.multiple,
        answer: [2],
        options: {
            1: {
                text: "금요일",
                selected: false,
            },
            2: {
                text: "토요일",
                selected: false,
            },
            3: {
                text: "일요일",
                selected: false,
            },
            4: {
                text: "월요일",
                selected: false,
            },
        },
        satisfied: false,
    },
    4: {
        description: {
            text: "윤건이는 규호가 ‘데이일보’ 인턴으로 근무할 당시 ‘데이일보’로 꽃을 보낸 적이 있다. 다음 중 윤건이 보낸 꽃으로 옳은 것은?",
            score: 10,
        },
        type: questionType.multiple,
        answer: [1],
        options: {
            1: {
                text: "하얀 장미꽃 한 송이",
                selected: false,
            },
            2: {
                text: "하얀 장미꽃 한 다발",
                selected: false,
            },
            3: {
                text: "붉은 장미꽃 한 송이",
                selected: false,
            },
            4: {
                text: "붉은 장미꽃 한 다발",
                selected: false,
            },
        },
        satisfied: false,
    },
    5: {
        description: {
            text: "여행부대 겨울 여행 때 윤건이가 규호 손에 쥐어준 음료로 옳은 것은?",
            score: 10,
        },
        type: questionType.multiple,
        answer: [4],
        options: {
            1: {
                text: "따뜻한 아메리카노",
                selected: false,
            },
            2: {
                text: "따뜻한 라떼",
                selected: false,
            },
            3: {
                text: "따뜻한 우유",
                selected: false,
            },
            4: {
                text: "따뜻한 코코아",
                selected: false,
            },
        },
        satisfied: false,
    },
    6: {
        description: {
            text: "규호는 <대형 언론, 알려지지 않는 이야기> 보도로 ‘올해의 기자상’을 로 수상하였다. 다음 중 규호가 상을 수상한 부문은 무엇인가?",
            score: 10,
        },
        type: questionType.multiple,
        answer: [2],
        options: {
            1: {
                text: "탐사 보도 부문",
                selected: false,
            },
            2: {
                text: "기획 보도 부문",
                selected: false,
            },
            3: {
                text: "취재 보도 부문",
                selected: false,
            },
            4: {
                text: "전문 보도 부문",
                selected: false,
            },
        },
        satisfied: false,
    },
    7: {
        description: {
            text: "다음 중 규호가 저장한 윤건이 연락처의 저장명으로 적절한 것을 모두 고르시오.",
            score: 15,
        },
        type: questionType.multipleAll,
        answer: [1, 2, 4],
        options: {
            1: {
                text: "여부 서윤건",
                selected: false,
            },
            2: {
                text: "책임감 오지게 투철하신 개씹새끼 학점 마귀 여부 서윤건",
                selected: false,
            },
            3: {
                text: "윤건",
                selected: false,
            },
            4: {
                text: "❤️syq1226❤️",
                selected: false,
            },
            5: {
                text: "❤️규호네 ㅂㅈㅈ❤️",
                selected: false,
            },
        },
        satisfied: false,
    },
    8: {
        description: {
            text: "다음 중 윤건이가 저장한 규호 연락처의 저장명으로 적절한 것을 모두 고르시오.",
            score: 15,
        },
        type: questionType.multipleAll,
        answer: [1, 2, 3],
        options: {
            1: {
                text: "여행부대 신규호",
                selected: false,
            },
            2: {
                text: "규호",
                selected: false,
            },
            3: {
                text: "❤️",
                selected: false,
            },
            4: {
                text: "❤️sqh0707❤️",
                selected: false,
            },
            5: {
                text: "여보",
                selected: false,
            },
        },
        satisfied: false,
    },
    9: {
        description: {
            text: "윤건이와 규호는 서른 한 살 무렵에 같은 집에서 살고 있는 상태이다. 다음 중 두 사람이 함께 살고 있는 집에 대한 설명으로 옳은 것을 모두 고르시오.",
            score: 15,
        },
        type: questionType.multipleAll,
        answer: [2, 3],
        options: {
            1: {
                text: "오피스텔이다.",
                selected: false,
            },
            2: {
                text: "신혼집이라고 부를 만한 크기이다.",
                selected: false,
            },
            3: {
                text: "옷방으로 보이는 작은 방이 있다.",
                selected: false,
            },
            4: {
                text: "쓰리룸 구조이다.",
                selected: false,
            },
            5: {
                text: "파파 오피스텔 1301호보다 훨씬 넓다.",
                selected: false,
            },
        },
        satisfied: false,
    },
    10: {
        description: {
            text: "규호는 도서관에서 책을 읽는 윤건이에게 “신규호: 010-xxxx-59** 열심히 독서하시는 옆모습에 용기 내어 봅니다. 연락 주세요~^^”라고 적은 쪽지를 던진 적이 있다. 이때 xxxx에 들어갈 수로 알맞은 것은?",
            score: 15,
        },
        type: questionType.short,
        answer: "2049",
        text: "",
        satisfied: false,
    },
    11: {
        description: {
            text: "윤건이는 학기당 성적(A, B 등의 평점을 뜻함)에 따라 다음 학기 생활비를 받는다고 하였다. 윤건이가 B+를 받았을 때의 생활비가 n만 원이라고 할 때, n의 값은? (단, 성적 등급 간 생활비 금액 차이는 동일하다고 가정한다.)",
            score: 15,
        },
        type: questionType.short,
        answer: "70",
        text: "",
        satisfied: false,
    },
    12: {
        description: {
            text: "‘올해의 기자상’ 시상식 날, 윤건이는 규호에게 포인세티아 꽃다발을 준다. 포인세티아의 꽃말은? (단, 띄어쓰기와 문장 부호는 무시한다.)",
            score: 20,
        },
        type: questionType.short,
        answer: "뜨거운 마음으로 축하한다",
        text: "",
        satisfied: false,
    },
    13: {
        description: {
            text: "다음에 제시된 초성을 보고 대사 전체를 쓰시오. “ㅊㄱㄴ ㅍㅌㄴ ㅇㅅㅇㄹ ㅈㅇ. ㄱㄴ ㄱㄹ.” (단, 띄어쓰기와 문장 부호는 무시한다.)",
            score: 20,
        },
        type: questionType.short,
        answer: "친구나 파트너 이상으로 좋아 그냥 그래",
        text: "",
        satisfied: false,
    },
    14: {
        description: {
            text: "다음에 제시된 초성을 보고 대사 전체를 쓰시오. “ㅅㄱㅎㄹ ㅅㄹㅇ ㄱ ㅈㅊㄹ ㅈㅈㅎ ㅅ ㅇㅈㅇ.” (단, 띄어쓰기와 문장 부호는 무시한다.)",
            score: 20,
        },
        type: questionType.short,
        answer: "신규호란 사람을 그 자체로 존중할 순 있잖아",
        text: "",
        satisfied: false,
    },
    15: {
        description: {
            text: "다음에 제시된 초성을 보고 대사 전체를 쓰시오. “ㄴㅇ ㅇㅅ ㄷ ㄱㄴ ㄱ ㅈㅈㄹ.” (단, 띄어쓰기와 문장 부호는 무시한다.)",
            score: 20,
        },
        type: questionType.short,
        answer: "남은 인생 다 거는 거 전제로",
        text: "",
        satisfied: false,
    },
}