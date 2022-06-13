const { Types } = require('mongoose');
const { expect } = require('chai');

describe('compare ObjectId', () => {
    it('should fail for different ObjectId', () => {
        const id1 = new Types.ObjectId('62a6f849b89e8026b74b4a6d');
        const id2 = new Types.ObjectId('62a6f852b89e8026b74b4a6e');

        expect(id1).to.deep.equal(id2);
    });

    it('should fail for objects with different ObjectId', () => {
        const id1 = new Types.ObjectId('62a6f849b89e8026b74b4a6d');
        const id2 = new Types.ObjectId('62a6f852b89e8026b74b4a6e');

        expect({ id1} ).to.deep.equal({ id1: id2 });
    });

    it('should pass for the same ObjectId', () => {
        const id1 = new Types.ObjectId('62a6f849b89e8026b74b4a6d');
        const id2 = new Types.ObjectId('62a6f849b89e8026b74b4a6d');

        expect(id1).to.deep.equal(id2);
    });

    it('should pass for the same ObjectId', () => {
        const id1 = new Types.ObjectId('62a6f849b89e8026b74b4a6d');
        const id2 = new Types.ObjectId('62a6f849b89e8026b74b4a6d');

        expect({ id1} ).to.deep.equal({ id1: id2 });
    });
});