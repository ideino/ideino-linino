--	
--	Ideino is based on Noide project by Dave Stone https://github.com/davidjamesstone/noide. 
--	Ideino https://github.com/ideino/ideino-linino-dist is released under the MIT License:
--	
--   Copyright (C) 2014 by Ideino
--
--

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