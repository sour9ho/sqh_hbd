import { questionType } from "constants/constants"

export const sampleQuestions = {
    1: {
        description: {
            text: "재경의 혈액형으로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [4],
        options: {
            1: {
                text: "A형",
                selected: false,
            },
            2: {
                text: "B형",
                selected: false,
            },
            3: {
                text: "AB형",
                selected: false,
            },
            4: {
                text: "O형",
                selected: false,
            },
        },
        satisfied: false,
    },
    2: {
        description: {
            text: "권재경의 생일로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [4],
        options: {
            1: {
                text: "7월 25일",
                selected: false,
            },
            2: {
                text: "7월 26일",
                selected: false,
            },
            3: {
                text: "7월 27일",
                selected: false,
            },
            4: {
                text: "7월 28일",
                selected: false,
            },
            5: {
                text: "7월 29일",
                selected: false,
            },
        },
        satisfied: false,
    },
    3: {
        description: {
            text: "재경은 작중에서 '나 벤치프레스 (A)kg까지 쳐요. 형 같은 사람 둘도 들 수 있는데.' 라고 말하며 지헌을 들어올리려 하였다. (A)로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [3],
        options: {
            1: {
                text: "160",
                selected: false,
            },
            2: {
                text: "170",
                selected: false,
            },
            3: {
                text: "180",
                selected: false,
            },
            4: {
                text: "190",
                selected: false,
            },
            5: {
                text: "200",
                selected: false,
            },
        },
        satisfied: false,
    },
    4: {
        description: {
            text: "'권재주'는 무엇의 줄임말인가?",
            score: 5,
        },
        type: questionType.short,
        answer: "권재경 주니어",
        text: "",
        satisfied: false,
    },
    5: {
        description: {
            text: "재경이 자유형 계영 400m에 참여했던 대회를 모두 고르시오.",
            score: 5,
        },
        type: questionType.multipleAll,
        answer: [1, 4],
        options: {
            1: {
                text: "16살에 참가한 아시안 게임",
                selected: false,
            },
            2: {
                text: "18살에 참가한 올림픽",
                selected: false,
            },
            3: {
                text: "21살에 참가한 범태평양 선수권 대회",
                selected: false,
            },
            4: {
                text: "22살에 참가한 올림픽",
                selected: false,
            },
        },
        satisfied: false,
    },
    6: {
        description: {
            text: "'그랜드 슬램'이란 네 개의 국제 대회를 석권하는 것을 말한다. 이때 수영에서 그랜드 슬램 달성을 위해 필수로 참여해야 하는 대회를 모두 고르시오.",
            score: 5,
        },
        type: questionType.multipleAll,
        answer: [1, 2, 3],
        options: {
            1: {
                text: "올림픽",
                selected: false,
            },
            2: {
                text: "세계선수권 대회",
                selected: false,
            },
            3: {
                text: "범태평양 선수권 대회",
                selected: false,
            },
            4: {
                text: "아시안 게임",
                selected: false,
            },
        },
        satisfied: false,
    },
    7: {
        description: {
            text: "지니(권진)의 출생 당시 몸무게로 알맞은 것은?",
            score: 5,
        },
        type: questionType.short,
        answer: "2",
        text: "",
        satisfied: false,
    },
}