from flask import Flask,jsonify,request,render_template
from flask_cors import CORS 
import warnings
from features import eventschedule,inquiryChatbot,soccerposition
warnings.filterwarnings("ignore")

app = Flask(__name__)
CORS(app)

@app.route('/optimize',methods=['POST'])
def optimize():
    data = request.get_json(force=True)
    NumberofDays = data['days']
    NumberofSports = data['NumSports']
    sportlist = ['Badminton']
    if NumberofSports == 2:
        sportlist = ['Badminton', 'Cricket']
    schedule = eventschedule(NumberofDays,sportlist)
    print(schedule)
    #print('data:',str(data))
    #check = int(data['checked'])
    #print(check)
    results = schedule
    #results = codingplagiarismcheck(check)
    #print(results)
    return jsonify(results), 200, {'Content-Type':'application/json'}

@app.route('/sportschatbot',methods=['POST'])
def sportschatbot():
    data = request.get_json(force=True)
    question = data['question']
    ans = inquiryChatbot(question)
    results = ans
    print(ans)
    return jsonify(results), 200, {'Content-Type':'application/json'}

@app.route('/soccerposition',methods=['POST'])
def soccer():
    data = request.get_json(force=True)
    print(data)
    question = data['position']
    print(question)
    ans = soccerposition(question)
    results = ans
    print(ans)
    #results = ""
    return jsonify(results), 200, {'Content-Type':'application/json'}

if __name__=='__main__':
    app.run(host='0.0.0.0',port=5001,debug=True)