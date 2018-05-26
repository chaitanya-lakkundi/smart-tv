#import pandas as pd
from skimage import io, transform
from sklearn.externals import joblib
from sys import argv
from subprocess import call

def preprocess(image):
    img = io.imread(image)
    img = transform.resize(img, (60,60))
    img = img.flatten().reshape(-1, 3600)
    return img

def main(filename):
    #filename = sys.argv[1]
    model = joblib.load('new_logo_model_clf.pkl')
    channel_mapping = {
        0: 'Aastha',
        1: 'DD_News',
        2: 'India_TV',
        3: 'Rishtey',
        4: 'Zee_News'
    }
    X = preprocess(filename)
    y_proba = model.predict_proba(X)
    #print(y_proba[0])
    if max(y_proba[0]) > 0.7:
        ind = list(y_proba[0]).index(max(y_proba[0]))
        print(filename,":", channel_mapping[ind])
        
        with open("predict_output", "a+") as out:
            out.write(filename.strip()+":"+channel_mapping[ind].strip()+"\n")

    call("sed -i '1d' predict_source", shell=True)

if __name__ == '__main__':
    with open("predict_source") as db:
        for filename in db.readlines():
            main(filename.strip())
