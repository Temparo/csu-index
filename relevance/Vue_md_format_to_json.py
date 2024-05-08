import re
import json

target: str = ""
mid_list: list = []
unformatted: str = """
- [中南大学作息时间表](https://www.csu.edu.cn/info/1050/1215.htm)
- [中南大学班车时刻表](https://oa.csu.edu.cn/con/NoticeInfo?JLNM=3894A9FC9A0941FEBD6C2688D4916D36&tableName=ZNDX_ZHBG_GGTZ)
- [研究生手册](https://www.csu.edu.cn/style/yjssc.pdf)
- [本科生手册](https://www.csu.edu.cn/style/bkssc2020.pdf)
- [办事平台用户手册](https://nic.csu.edu.cn/bsfw/yhsc.htm)
- [勤助中心](https://xszz.csu.edu.cn/)
- [赞噢集市](http://www.zanoa.cn/)
<微信小程序搜索也可以找到>

"""
unformatted = unformatted.replace("\n", "")
formatted: list = unformatted.split("- ")
count = 0

for item in formatted:
    if item != "":  # remove empty string
        text = re.search(r"\[(.*?)]", item).group().replace("[", "").replace("]", "")
        url = re.search(r"\((.*?)\)", item).group().replace("(", "").replace(")", "")
        small_dict: dict = {"id": 'nanoid()', "url": url, "text": text}
        if re.search(r"<(.*?)>", item) is not None:
            detail = re.search(r"<(.*?)>", item).group().replace("<", "").replace(">", "")
            small_dict["detail"] = detail

        mid_list.append(small_dict)
        count += 1

target = json.dumps(mid_list, ensure_ascii=False, indent=True)
target = target.replace("\"nanoid()\"", "nanoid()")
print(target)
print("共有{}个链接".format(count))
