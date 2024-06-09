const dataProfileLeft = [
    {
        id: "element1",
        relations: {
            targetId: 'root',
            targetAnchor: 'left',
            sourceAnchor: 'right',
        },
        content: {
            men: {
                title: "Nguyễn Thanh Quỳnh Linh",
                description: "21/06/2002"
            },
            women: {
                title: "Lệ Thị Kim Yến",
                description: "06/04/2002"
            }
           
        }
    },
    {
        id: "element2",
        relations: {
            targetId: 'root',
            targetAnchor: 'left',
            sourceAnchor: 'right',
        },
        content: {
            men: {
                title: "Sống tại Hồ Chí Minh",
                description: "Quê quán TP.Pleiku, tỉnh Gia Lai"
            },
            women: {
                title: "Sống tại Hồ Chí Minh",
                description: "Quê quán Thành Phố Tây Ninh"
            }
        }
    },
    {
        id: "element3",
        relations: {
            targetId: 'root',
            targetAnchor: 'left',
            sourceAnchor: 'right',
        },
        content: {
            men: {
                title: "Trường Đại Học Sài Gòn",
                description: "Chuyên ngành Kỹ Thuật Phần Mềm"
            },
            women: {
                title: "Trường Đại Học Hutech",
                description: "Chuyên ngành Logistics"
            }
        }
    },
];

const dataProfileRight = [
    {
        id: "element4",
        relations: {
            targetId: 'root',
            targetAnchor: 'right',
            sourceAnchor: 'left',
        },
        content: {
            men: {
                title: "Sở thích",
                description: "Ngủ, Ăn gà luộc"
            },
            women: {
                title: "Sở thích",
                description: "Coi phim, Ăn gàn rán"
            }
        }
    },
    {
        id: "element5",
        relations: {
            targetId: 'root',
            targetAnchor: 'right',
            sourceAnchor: 'left',
        },
        content: {
            men: {
                title: "Câu chuyện",
                description: "Your charisma effortlessly lights up any room."
            },
            women: {
                title: "Câu chuyện",
                description: "Your confidence is both empowering and infectious."
            }
        }
    },
    {
        id: "element6",
        relations: {
            targetId: 'root',
            targetAnchor: 'right',
            sourceAnchor: 'left',
        },
        content: {
            men: {
                title: "Tương lai",
                description: "Your charisma effortlessly lights up any room."
            },
            women: {
                title: "Tương lai",
                description: "Your confidence is both empowering and infectious."
            }
        }
    },
];

export {dataProfileLeft,dataProfileRight};