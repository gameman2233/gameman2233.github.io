users_list=["bz"]
passwords_list=["darealest"]

def password():
    while True:
        password = input("What is your password. ")
        if password == passwords_list[usersdex]:
            print("logged in")
            break
        else:
            print("password incorrect")
            login()
def login():
    global usersdex
    while True:
        name= input("What is your name. ")
        if name in users_list:
            usersdex = users_list.index(name)
            password()
            break
        else:
            print("Name invalid.")
login()