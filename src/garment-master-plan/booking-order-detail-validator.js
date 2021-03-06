require("should");
var validatorUnit = require('../master/unit-validator');
var validatorWeek = require('./weekly-plan-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('unitId');
    data.unitId.should.instanceOf(Object);

    data.should.have.property('unit');
    data.unit.should.instanceOf(Object);
    validatorUnit(data.unit);
    
    data.should.have.property('weeklyPlanId');
    data.weeklyPlanId.should.instanceOf(Object);
    
    data.should.have.property('weeklyPlanYear');
    data.weeklyPlanYear.should.instanceOf(Number);
    
    data.should.have.property('quantity');
    data.quantity.should.be.instanceOf(Number);

    data.should.have.property('week');
    data.week.should.instanceOf(Object);
    validatorWeek(data.week);
};