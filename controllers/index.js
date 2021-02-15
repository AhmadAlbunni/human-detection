const tf = require('@tensorflow/tfjs');
const canvas = require('canvas');

const SVM_MODEL = JSON.stringify(require('../aiModels/svmModel'));
// const MOBILE_NET_MODEL = JSON.stringify(require('../aiModels/mobileNet'));
const IMAGE_SIZE = 224;
const MOBILE_NET_MODEL = 'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';
    
class FeatureExtractor {


    async classifyImage(req ,res){
        console.log('my file' , req.file)
        console.log('my body' , req.body)

        const result = await FeatureExtractor.getClassificationModel(req.file);
        res.json(JSON.stringify(result));
    }

    static async getClassificationModel (image){
        console.log('starting extraction ............')
        const myModel = await tf.loadLayersModel(MOBILE_NET_MODEL);
        myModel.predict(tf.zeros([1, IMAGE_SIZE, IMAGE_SIZE, 3])).dispose();


        const img = tf.browser.fromPixels(image).toFloat();

        const offset = tf.scalar(127.5);
        const normalized = img.sub(offset).div(offset);
        const batched = normalized.reshape([1, IMAGE_SIZE, IMAGE_SIZE, 3]);
        
        let features =  myModel.predict(batched);

        return features;

    }    
}


module.exports = new FeatureExtractor()