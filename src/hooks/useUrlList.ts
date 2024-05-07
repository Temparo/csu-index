import {nanoid} from "nanoid";
import {type UrlBlock} from "../types";

export default function () {
    let urlList1: UrlBlock = [
        {
            "id": nanoid(),
            "url": "https://lib.csu.edu.cn/",
            "text": "图书馆"
        },
        {
            "id": nanoid(),
            "url": "https://my.csu.edu.cn/login/index.jsp",
            "text": "信息门户"
        },
        {
            "id": nanoid(),
            "url": "https://faculty.csu.edu.cn/",
            "text": "教师信息查询"
        },
        {
            "id": nanoid(),
            "url": "https://54sh.csu.edu.cn/tntz/tntz.htm",
            "text": "升华网通知"
        },
        {
            "id": nanoid(),
            "url": "https://portpal.csu.edu.cn/",
            "text": "上网认证"
        },
        {
            "id": nanoid(),
            "url": "https://oa.csu.edu.cn/con/ggtz",
            "text": "校内通知"
        },
        {
            "id": nanoid(),
            "url": "https://ehall.csu.edu.cn/v2/site/index",
            "text": "办事大厅"
        },
        {
            "id": nanoid(),
            "url": "https://oa.csu.edu.cn/mailbox/?tp=01",
            "text": "校长信箱",
            "detail": "有可能获得与辅导员单独交流的机会,请谨慎发言"
        },
        {
            "id": nanoid(),
            "url": "http://csujwc.its.csu.edu.cn/",
            "text": "本科教务管理系统"
        },
        {
            "id": nanoid(),
            "url": "http://gms.csu.edu.cn/",
            "text": "研究生教育管理系统"
        },
        {
            "id": nanoid(),
            "url": "https://lms.csu.edu.cn/login",
            "text": "教学可视化"
        },
        {
            "id": nanoid(),
            "url": "https://ecard.csu.edu.cn/plat-pc/serviceclassification",
            "text": "校园卡中心"
        }
    ]

    let urlList2: UrlBlock = [
        {
            "id": nanoid(),
            "url": "https://ms.csu.edu.cn/",
            "text": "正版软件"
        },
        {
            "id": nanoid(),
            "url": "https://mail.csu.edu.cn/",
            "text": "中南邮箱"
        },
        {
            "id": nanoid(),
            "url": "http://equip.csu.edu.cn/",
            "text": "仪器共享平台"
        },
        {
            "id": nanoid(),
            "url": "https://www.csu.edu.cn/index/xsjz.htm",
            "text": "学术讲座"
        },
        {
            "id": nanoid(),
            "url": "https://www.csu.edu.cn/info/1050/5129.htm",
            "text": "常用电话"
        },
        {
            "id": nanoid(),
            "url": "https://www.csu.edu.cn/info/1050/7585.htm",
            "text": "校历"
        },
        {
            "id": nanoid(),
            "url": "https://career.csu.edu.cn/",
            "text": "就业指导中心"
        }
    ]
    return {urlList1, urlList2}
}