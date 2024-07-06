from pulp import LpProblem, LpMinimize, LpVariable, lpSum
def eventschedule(numdays,sportslist):
# Define sports and venues
    timing = ['Morning', 'Afternoon','Evening']
    team_num = [3,4,5,6]
    sports = sportslist
    #sports = ['Basketball', 'Soccer', 'Volleyball', 'Tennis']
    venues = ['Court 1', 'Field 1', 'Court 2', 'Court 3']
    days = numdays

    # Define time slots (morning and afternoon for 4 days)
    time_slots = [(day, time) for day in range(1, days+1) for time in timing]

    # Create LP problem
    prob = LpProblem("EventScheduling", LpMinimize)

    # Define decision variables
    schedule = LpVariable.dicts("schedule", ((sport, venue, day, time) for sport in sports
                                            for venue in venues
                                            for day, time in time_slots), cat='Binary')

    # Define objective function: minimize conflicts
    prob += lpSum(schedule[sport, venue, day, time] for sport in sports
                for venue in venues
                for day, time in time_slots), "Total Conflicts"

# Constraints
# Each sport is scheduled exactly once per day
    for sport in sports:
        for day in range(1, days+1):
            prob += lpSum(schedule[sport, venue, day, time] for venue in venues for time in timing) == 1

    # Each venue can host only one sport at a time
    for venue in venues:
        for day, time in time_slots:
            prob += lpSum(schedule[sport, venue, day, time] for sport in sports) <= 1

    # Solve the problem
    prob.solve()

    sched = {}
    for i in range(1,days+1):
        sched[i] = dict({"Morning":{"Sport":"","Venue":""},"Afternoon":{"Sport":"","Venue":""},"Evening":{"Sport":"","Venue":""}})
    # Print the schedule
    #print("Optimized Event Schedule:")
    for sport in sports:
        for venue in venues:
            for day, time in time_slots:
                if schedule[sport, venue, day, time].varValue == 1:
                    #print(f"Day {day}, {time}: {sport} at {venue}")
                    sched[day][time]["Sport"] = sport
                    sched[day][time]["Venue"] = venue
    #print(sched)
    return sched

from langchain_google_genai import GoogleGenerativeAI
def inquiryChatbot(question):
    from langchain.embeddings import GooglePalmEmbeddings
    from langchain.llms import GooglePalm

    import google.generativeai as palm
    api_key = 'AIzaSyBphdFZtRbGOhg6nQCXWO0ox1mWtFgVwDc' # put your API key here
    # palm.configure(api_key=api_key)

    # llm = GooglePalm(google_api_key=api_key)
    # llm.temperature = 0
    # 1st chatbot
    llm = GoogleGenerativeAI(model="models/text-bison-001", google_api_key=api_key, temperature=0.1)



    template = """
    You are an artificial intelligence assistant who is a master in sports. You are asked to answer questions. The assistant gives helpful, detailed, and polite answers to the user's questions.

    {question}

    """

    from langchain import PromptTemplate, LLMChain

    prompt = PromptTemplate(template=template, input_variables=["question"])
    llm_chain = LLMChain(prompt=prompt, llm=llm, verbose=True)

    que=question

    answer = llm_chain.run(que)

    return answer

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.metrics import classification_report

# Preprocessing: Convert categorical data into numerical format
# Assuming you have already encoded the data into numerical format

# Split the dataset into features and target
df= pd.read_csv('./soccer.csv')
y = df['antecedent']
X = df.drop(['antecedent'],axis=1)

# Split the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


vectorizer = TfidfVectorizer()
X_train_vec = vectorizer.fit_transform(X['orig_antecedent'])
#X_test_vec = vectorizer.transform(X_test['orig_antecedent'])

model = SVC(kernel='linear')
model.fit(X_train_vec, y)
#y_pred = model.predict(X_test_vec)

def soccerposition(position):
    new_data = position
    new_data_vec = vectorizer.transform(new_data)
    predicted_strategies = model.predict(new_data_vec)
    class_names = ['kick a field goal','kneel down','pass','punt','run']
    return class_names[predicted_strategies-1]