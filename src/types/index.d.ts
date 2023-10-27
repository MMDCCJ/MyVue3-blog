declare type Slogan = {
    /**
     *  名言
     */
    saying: string,
    /**
     * 作者
     */
    speaker: string
}
declare type ArticleList = {
    /**
     *  文章ID
     */
    ID: number,
    /**
     * 创建时间
     */
    firstUpdateDate: string,
    /**
     * 最近更新时间
     */
    lastUpdateDate: string,
    /**
     * 文章标题
     */
    title: string,
    /**
     * 文章内容简介
     */
    articleBody: string,
    /**
     *  是否被删除 N / Y
     */
    isDelete: string,
    /**
     * 作者
     */
    author: string
}
