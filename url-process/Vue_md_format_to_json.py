import re
import json

md_file = open("origin-urls.md", "r", encoding="utf-8")
ts_template = open("useUrlList-Template", "r", encoding="utf-8")
ts_output = open("../src/hooks/useUrlList.ts", "w", encoding="utf-8")

md_content = md_file.read()
ts_template_content = ts_template.read()
md_file.close()
ts_template.close()


sequence: int = 1

ret = re.finditer(r"\{.*?}", md_content, flags=re.MULTILINE | re.DOTALL)
for block in ret:
    unformatted: str = block.group().replace("{", "").replace("}", "")
    unformatted = unformatted.replace("\n", "")
    formatted: list = unformatted.split("- ")
    count: int = 0
    target: str = ""
    mid_list: list = []

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
    # print(target)
    # print("共有{}个链接".format(count))
    ts_template_content = re.sub(r"<block{}>".format(sequence), target, ts_template_content)
    sequence += 1

ts_output.write(ts_template_content)
ts_output.close()
