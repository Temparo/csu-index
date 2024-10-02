import {ref} from 'vue';

export function useAwesomeUrls() {
    const urls = ref([
        {
            url: "https://github.com/dream-oyh/CSU_card_read",
            text: "中南大学电费统计",
            description: "中南大学校园卡余额每日自动查询+推送"
        },
        {
            url: "https://github.com/zzbcode/CSU-Library-main",
            text: "中南大学图书馆自动预约系统",
            description: "中南大学图书馆预约助手，自动预约座位。"
        },
        {
            url: "https://qike.huayemao.run/",
            text: "绮课",
            description: "绮课（Cheer Curriculum）是又一个 CSUer 的课表查询工具，你可以用它来计划蹭课、获取自习室信息、关注其他同学的课表、帮助抉择选课或将课表添加到日历"
        },
        {
            url: "https://github.com/barkure/CSU_courseList",
            text: "中南大学公选课课程列表爬取",
        },
        {
            url: "https://github.com/FeijiangHan/CSU-CS-review-materials",
            text: "CSU - CS期末备考复习资料",
            description: "中南大学-计算机专业课期末复习资料汇总（重点/整理/试题..）"
        },
        {
            url: "https://github.com/baiyeweiguang/CSU-RM-Sentry",
            text: "中南大学FYT战队RM哨兵机器人上位机算法 ",
            description: "中南大学FYT机器人战队哨兵机器人上位机算法（定位与导航部分）。"
        },
        {
            url: "https://github.com/CSU-FYT-Vision/FYT2024_vision",
            text: "中南大学FYT战队RoboMaster24赛季视觉项目 ",
            description: "中南大学FYT战队24赛季视觉项目主仓库，该项目在原rm_vision项目上扩展了自瞄选板、能量机关识别与预测、哨兵定位、自主导航等功能，为RoboMaster机器人实现了一套通用的算法框架"
        },
        {
            url: "https://github.com/barkure/CSU-Net-Portal",
            text: "CSU-Net-Portal",
            description: "自动登录中南大学校园网，保持校园网登录态"
        },
        {
            url: "https://academictree.org/",
            text: "Academic Tree",
            description: "导师关系网分析，适合有留学想法的提前确定导师的学术关系"
        }
    ]);

    return {
        urls
    };
}
