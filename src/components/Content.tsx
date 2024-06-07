import Card from "./Card";
export function Content() {

    const cards = [
        {
            id: 1,
            title: "星際旅行訂票平台",
            url: "images/work-image1.png",
            info: "悠遊宇宙的夢想，從這裡開始實現",
            items: ["網頁設計", "響應式設計", "Bootstrap"]
        },
        {
            id: 2,
            title: "理財App",
            url: "images/work-image2.png",
            info: "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
            items: ["APP設計", "iOS", "React"]
        },
        {
            id: 3,
            title: "醫美診所官網",
            url: "images/work-image3.png",
            info: "永保青春的秘密，從粹究開始",
            items: ["網頁設計", "響應式設計", "WordPress"]
        },
        {
            id: 4,
            title: "美美美早餐店 POS 機 UI Design",
            url: "images/work-image4.png",
            info: "訂單送單一目瞭然，自動報表分析好輕鬆",
            items: ["UI 設計", "前端開發", "Wix"]
        },
        {
            id: 5,
            title: "電影院訂票系統",
            url: "images/work-image5.png",
            info: "三步驟完成訂票，電腦手機都支援",
            items: ["前端開發", "後端支援", "Vue"]
        },
        {
            id: 6,
            title: "巧克巧克形象官網設計",
            url: "images/work-image6.png",
            info: "三步驟完成訂票，電腦手機都支援",
            items: ["UI設計", "設計系統", "網路電商"]
        },
    ];

    return (
        <div className="content-section">
            <div className="card-section">
                <Card cards={cards} />
            </div>
            <div className="paginations">
                <div className="page active">1</div>
                <div className="page">2</div>
                <div className="page">3</div>
            </div>
        </div>
    )

}
export default Content;
