from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir("./assets/flags") if isfile(join("./assets/flags", f))]
result = ""
for file in onlyfiles:
    result+= "case '{}':\n  return require('../assets/flags/{}');\n".format(file[:-4], file)
print(result)