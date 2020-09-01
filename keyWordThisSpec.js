//TESTING SUMMING OF EVEN ARGUMENTS

describe("sumEvenArguments", function(){
    it ("returns the sum of even arguments", function(){
        expect(sumEvenArguments(1,2,3,4)).toEqual(6);
    });

    it("returns the sum of even arguments", function(){
        expect(sumEvenArguments(1,2,6)).toEqual(8);
    });

    it ("returns the sum of even arguments", function(){
        expect(sumEvenArguments(1,2)).toEqual(2);
    });
           
    });

// arrayForm Function Testing
    describe("arrayFrom", function(){
        it("converts array-like-object into an array", function(){
            expect(arrayFrom(2,4,6,8)).toEqual([2,4,6,8])
    })
             
    })

//  TESTING invokeMax FUNCTION

    describe("invokeMax",function(){
        it("accepts a function and maximum amount and returns a Maxed out! when counter is greater than maximum amount", function(){
   expect(addOnlyThreeTimes(1,2)).toEqual("Maxed Out!");
        })
    });