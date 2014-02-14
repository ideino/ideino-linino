local luc = require "luci.sys"

usr = arg[1]
pwd = arg[2]

if luc.user.checkpasswd(usr,pwd) == true then
	-- print("OK")
	os.exit(101) 
else
	-- print("KO")
	os.exit(100)
end