# try:
#     fl = open("demo.txt", 'w')
#     fl.write("Woops! I have deleted the content!")
#     fl.close()  # Jangan lupa menutup file setelah selesai
# except Exception as e:
#     print("Terjadi kesalahan:", str(e))

with open("demo.txt", 'w') as fl:
    fl.write("Woops! I have deleted the content!")
