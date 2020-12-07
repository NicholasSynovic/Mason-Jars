with open("year 3") as file:
    lines = file.readlines()
    lines2 = []
    for line in lines:
        line = line.strip().replace("\n", "")
        lines2.append(line)
    file.close()

with open("FormattedYear3.txt", "w") as file:
    count = 1
    for line in lines2:
        if count == 1:
            header = "Memory"
        else:
            header = "Reason For Love"
        file.write('\t<use href="#cycleview-item" class="cycle-item">')
        file.write("\n")
        file.write('\t\t<use id="mixedtext" href="#mixed-text-center-mid" height="100%" fill="fb-yellow">')
        file.write("\n")
        file.write('\t\t\t<set href="#header/text" attributeName="text-buffer" to="{}"/>'.format(header))
        file.write('\n')
        file.write('\t\t\t<set href="#copy/text" attributeName="text-buffer" to="{}"/>'.format(line))
        file.write("\n")
        file.write('\t\t</use>')
        file.write("\n")
        file.write('\t</use>')
        file.write("\n")

        if count == 1:
            count+= 1
        else:
            count -= 1

    file.close()
