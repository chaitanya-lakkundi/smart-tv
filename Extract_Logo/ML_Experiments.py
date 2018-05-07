
# coding: utf-8

# ### Loading Libraries

# In[1]:


import pandas as pd
import numpy as np
# import matplotlib.pyplot as plt
# from sklearn import datasets
from skimage import io, transform # filters, color, 
from os import listdir

image_files = listdir('LOGOS/')


# ### Loading Image Files

# In[2]:


bw_image_files = list(filter(lambda x: x.find('bw') != -1, image_files))
bw_image_data = list(map(lambda x: io.imread('LOGOS/'+x), bw_image_files))
bw_channel = list(map(lambda x: x.split('-')[0].lower(), bw_image_files))
image_df = pd.DataFrame({'image': bw_image_data, 'channel': bw_channel, 'filename':bw_image_files})


# In[309]:


# image_df.shape


# ### Thresholding

# In[212]:


# dummy_img = io.imread('LOGOS/Rishtey-7-2.jpg')
# dummy_img2 = io.imread('LOGOS/Rishtey-7-2.jpg.bw.png')


# In[231]:

"""
dummy_img3 =  color.rgb2gray(dummy_img) > filters.threshold_sauvola(color.rgb2gray(dummy_img))
dummy_img4 =  color.rgb2gray(dummy_img) > filters.threshold_yen(color.rgb2gray(dummy_img))
fig = plt.figure(figsize=(5,5))
plt.imshow(dummy_img)
plt.show()
plt.imshow(dummy_img2, cmap=plt.cm.gray)
plt.show()
plt.imshow(dummy_img3, cmap=plt.cm.gray)
plt.show()
plt.imshow(dummy_img4, cmap=plt.cm.gray)
plt.show()
"""

# In[307]:


#image_df.head()


# ### Resizing Images to 60x60

# In[179]:


#image_df.image[6].shape


# In[181]:


#plt.imshow(image_df.image[6], cmap=plt.cm.gray)
#plt.show()


# In[190]:


#plt.imshow(transform.resize(image_df.image[6], (60,60)), cmap=plt.cm.gray)
#plt.show()


# ### Data preprocessing: Resizing Image, Label Encoding Channel, Image Feature Extraction

# In[310]:


#resizing all images of dataset to 60x60 size
image_df.image = image_df.image.apply(lambda x: transform.resize(x, (60,60)))


# In[311]:


#label_encode target variable
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
image_df.channel = le.fit_transform(image_df.channel)


# In[313]:


#extract features
temp = image_df.image.apply(lambda x: x.flatten())
image_df = pd.concat([image_df, pd.DataFrame(temp.values.tolist())], axis=1)


# In[315]:


# image_df.head(10)


# In[316]:


from sklearn.model_selection import train_test_split

y = image_df.channel
X = image_df.drop(['filename', 'channel', 'image'], axis=1)
xtrain, xtest, ytrain, ytest = train_test_split(X, y, test_size=0.4)


# In[317]:


#print xtrain.shape, ytrain.shape
#print xtest.shape, ytest.shape


# ### Linear SVC model

# In[318]:


from sklearn.svm import LinearSVC
# from sklearn.multiclass import OneVsRestClassifier

#model = LinearSVC()
#model = model.fit(xtrain, ytrain)
#pred = model.predict(xtest)


#mod = OneVsRestClassifier(LinearSVC()).fit(xtrain, ytrain)
#proba = (1./(1.+np.exp(-mod.decision_function(np.array(xtest).reshape(1,-1)))))
#proba /= proba.sum(axis=1).reshape((proba.shape[0], -1))

svm = LinearSVC()
clf = CalibratedClassifierCV(svm) 
clf.fit(xtrain, ytrain)
# y_proba = clf.predict_proba(xtest)
# list(y_proba[0]).index(max(y_proba[0]))

from sklearn.externals import joblib
joblib.dump(clf, 'new_logo_model_clf.pkl')

# In[321]:


#pred == ytest

