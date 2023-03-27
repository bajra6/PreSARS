from flask import Flask, render_template,request
from ml import mlmodudle
app = Flask(__name__)

# ...

@app.route('/', methods=('GET', 'POST'))
def index():
    if request.method == "POST":
       # getting input with name = fname in HTML form
       # getting input with name = lname in HTML form
        print(request)
        symtomes = str(request.form.get('symtomes'))
        print('______________________________________')
        print(symtomes)
        print('______________________________________')
        return render_template('output.html',output=mlmodudle.aa(symtomes.split(",")))
    else:
        return render_template('input.html')
# @app.route('/saa/')
# def saa():
#     return render_template('output.html',output=mlmodudle.aa(list(map(str, input("elements of array:-").strip().split(',')))))

#to run flask
# in comand: python -m flask --app .\app.py run