const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: String,
    title: String,
    type: String,
    location: String,
    skills: String
})

const JobModel = mongoose.model("Job", jobSchema,"jobs");

JobModel.findJob = function (req, callBack) {
    let id = req.query.id;
    let query = {};
    if (id) {
        query = { _id: id }
    }
    JobModel.find(query, callBack);
}

JobModel.addJob = function (req, callBack) {
    let jobs = req.body;
    JobModel.create(jobs, callBack);
}

JobModel.updateBook = function (req, callBack) {
    let query = { _id: req.body._id };
    let jobs = req.body;
    JobModel.updateOne(query, jobs, callBack);
}

JobModel.deleteJob = function (req, callBack) {
    let query = { _id: req.query.id };
    JobModel.deleteOne(query, callBack);
}

module.exports = JobModel;