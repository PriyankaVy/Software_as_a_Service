const vlogPostModel = require('../models/VlogPostModel');

const MyVlogPost = vlogPostModel;

var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Blog Posts list result', function () {
    var request;
    var response;

    before(function (done) {
        chai.request("https://bloggers-room.azurewebsites.net").get("/blogPosts").end(function (err, res) {
            request = res.body;
            response = res;
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    it('Should return an array of posts objects', function () {
        expect(response).to.have.status(200);
        expect(response.body).to.have.length.above(1);
        expect(response).to.have.headers;
    });

    it('The blog post in the array has known properties', function () {
        expect(request[0]).to.include.keys('title');
        expect(request[0]).to.have.property('_id');
        expect(response.body).to.not.be.a.string;
    });

    it('The posts in the array have the expected properties', function () {
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body[i]).to.have.property('title');
                    expect(body[i]).to.have.property('content');
                    expect(body[i]).to.have.property('post_id');
                    expect(body[i]).to.have.property('category').that.is.a('string');
                }
                return true;
            });
    });

});

describe('Test single Blog Post result', function () {
    var req;
    var resp;

    before(function (done) {
        chai.request("https://bloggers-room.azurewebsites.net").get("/blogPosts/posts/1").end(function (err, res) {
            req = res.body;
            resp = res;
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    it('Should return a post object', function () {
        expect(resp).to.have.status(200);
        expect(resp).to.be.json;
        expect(resp).to.have.headers;
    });


});

describe('Test to create a new Vlog Post result', function () {
    this.timeout(10000);
    let createdId;
    let newPost = {
        author_id: 'author123',
        image_url: 'https://example.com/image.jpg',
        title: 'Test Post',
        content: 'This is a test post.',
        post_id: 123,
        category: 'test',
        publication_date: '2023-06-06',
        post_url: 'https://example.com/test-post',
        views: 0,
        likes: 0,
        dislikes: 0
    };
    let resp;

    before(function (done) {
        chai.request("https://bloggers-room.azurewebsites.net")
            .post("/vlogPosts")
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(newPost)
            .end(function (err, res) {
                resp = res;
                createdId = resp.body.title;
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });
    });

    it('Should create a post object', function () {
        expect(resp).to.have.status(201);
        expect(resp).to.be.json;
        expect(resp).to.have.headers;
    });

    it('The post has the expected properties', function () {
        expect(resp.body).to.satisfy(function (body) {
            expect(body).to.have.property('title');
            expect(body).to.have.property('content');
            expect(body).to.have.property('post_id');
            expect(body).to.have.property('category').that.is.a('string');
            return true;
        });
    });

    after(function (done) {
        chai.request("https://bloggers-room.azurewebsites.net").delete("/vlogposts" + createdId)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });

    });

});
