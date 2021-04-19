from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir("./assets/flags") if isfile(join("./assets/flags", f))]
result = ""
for file in onlyfiles:
    name = format(file[:-4])
    result+= f"case '{name}':\n return require('./assets/flags/{file}');\n"
print(result)