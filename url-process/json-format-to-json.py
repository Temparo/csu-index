import re
import json

origin_file = open("origin-urls.json", "r", encoding="utf-8")
ts_template = open("useUrlList-Template", "r", encoding="utf-8")
ts_output = open("../src/hooks/useUrlList.ts", "w", encoding="utf-8")

origin_content = origin_file.read()
ts_template_content = ts_template.read()
origin_file.close()
ts_template.close()

sequence: int = 1
content_dic = json.loads(origin_content)
for key, value in content_dic.items():
    count: int = 0
    mid_list: list = []
    target: str = ""
    block_name = key

    for item in value:
        text = item["text"]
        url = item["url"]
        small_dict: dict = {"id": 'nanoid()', "url": url, "text": text}
        if item.get("description") is not None:
            description = item["description"]
            small_dict["description"] = description
        mid_list.append(small_dict)
        count += 1

    target = json.dumps(mid_list, ensure_ascii=False, indent=True)
    target = target.replace("\"nanoid()\"", "nanoid()")
    print(target)
    # print("共有{}个链接".format(count))
    ts_template_content = re.sub(r"<blockContent{}>".format(sequence), target, ts_template_content)
    ts_template_content = re.sub(r"<blockName{}>".format(sequence), block_name, ts_template_content)
    sequence += 1

ts_output.write(ts_template_content)
ts_output.close()
