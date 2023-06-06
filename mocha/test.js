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
        chai.request("http://localhost:8080").get("test/blogPosts").end(function (err, res) {
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

    it('The blog post in the array has known properties', function(){
	    expect(request[0]).to.include.keys('title');
	    expect(request[0]).to.have.property('_id');
		expect(response.body).to.not.be.a.string;
	});

	it('The posts in the array have the expected properties', function(){
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
        chai.request("http://localhost:8080").get("test/blogPosts/posts/1").end(function (err, res) {
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

    it('The post has the expected properties', function () {
        expect(resp.body).to.satisfy(
            function (body) {
                expect(body).to.have.property('title');
                expect(body).to.have.property('content');
                expect(body).to.have.property('post_id');
                expect(body).to.have.property('category').that.is.a('string');
                return true;
            });
    });
});