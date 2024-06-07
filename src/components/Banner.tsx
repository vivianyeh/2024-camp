export function Banner() {
    const experiences = [
        { title: '2B經驗', item: '內部監控系統、庫存系統、採購系統、行銷整合系統' },
        { title: '2C經驗', item: '跨國美妝保養電商、個人品牌網站、醫美網站、電子商務' },
    ];

    return (
        <>
            <div className="banner">
                <div className="quote-section">
                    <img className="left-quote" src="images/quote-left.png" alt="left quote" />
                    <div className="slogan">
                        <p>讓使用者在觀賞與使用的旅程中，發現
                            <span>設計的價值
                                <img src="./images/mark.png" className="mark" alt="mark" />
                            </span>
                        </p>
                        <p>而我在設計與開發的過程中，看見
                            <span>自己的價值
                                <img src="./images/mark.png" className="mark" alt="mark" />
                            </span>
                        </p>
                    </div>
                    <img className="right-quote" src="images/quote-right.png" alt="right quote" />
                </div>
                <div className="exp-section">
                    {
                        experiences.map((exp) => (
                            <div className="exp-card">
                                <div className="exp-card primary-600">
                                    {exp.title}
                                    <hr />
                                </div>
                                <div className="exp-card primary-700">
                                    {exp.item}
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </>
    )

}
export default Banner;
