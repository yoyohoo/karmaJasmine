'use strict'
describe('Unit testing controller: RfdTaxController', function() {
    var ctrl,
        taxService,
        $compile,
        $rootScope,
        $scope;

    beforeEach(module('ocApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_, $controller) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        taxService = {
            getTaxes: function() {}
        };
        spyOn(taxService, 'getTaxes').and.returnValue(true);
        $scope = $rootScope.$new();
        ctrl = $controller('RfdTaxController', {
            $scope: $scope,
            taxService: taxService
        });
    }));

    it('1st : Should have 3 tab pages', function() {
        expect($scope.pages.length).toBe(3);
        expect(taxService.getTaxes()).toBe(true);
    });

    it('2nd : Should call log function', function() {
        var log = function(msg) {
            console.log('ocSpec:', msg)
        }
        expect($scope.log('ocApp')).toEqual(log('ocApp'));
    });

    it('3rd : Should be 10 records per page', function() {
        expect($scope.taxGridOptions.dataSource.pageSize).toBe(10);
    });

    it('4th : Should $scope.togglePage be a function', function() {
        expect(typeof($scope.togglePage)).toEqual('function');
    });

    it('5th : Should <kendo-grid> attribute data-role be grid', function() {
        var el = $compile('<kendo-grid></kendo-grid>')($rootScope);
        $rootScope.$digest();
        expect(el.attr('data-role')).toBe('grid');
    })
    it('6th : Should <kendo-grid> class have k-grid k-widget', function() {
        var el = $compile('<kendo-grid></kendo-grid>')($rootScope);
        $rootScope.$digest();
        expect(el[0].className).toContain('k-grid k-widget');
    })
    it('7th : Should <kendo-grid> has 2 children elements', function() {
        var el = $compile('<kendo-grid></kendo-grid>')($rootScope);
        $rootScope.$digest();
        expect(el.children().length).toBe(2);
    })
});

describe('Unit testing controller: RfdStateController', function() {
    var ctrl,
        stateService,
        $scope;

    beforeEach(module('ocApp'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('RfdStateController', {
            $scope: $scope
        });
    }));

    it('1st : Should have 3 tab pages', function() {
        expect($scope.pages.length).toBe(3);
    });

    it('2nd : Should call log function', function() {
        var log = function(msg) {
            console.log('ocSpec:', msg)
        }
        expect($scope.log('ocApp')).toEqual(log('ocApp'));
    });

    it('3rd : Should be 10 records per page', function() {
        expect($scope.stateGridOptions.dataSource.pageSize).toBe(10);
    });

});

describe('Unit testing controller: RfdSectorController', function() {
    var ctrl, stateService, $scope;

    beforeEach(module('ocApp'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('RfdSectorController', {
            $scope: $scope
        });
    }));

    it('1st : Should have 3 tab pages', function() {
        expect($scope.pages.length).toBe(3);
    });

    it('2nd : Should call log function', function() {
        var log = function(msg) {
            console.log('ocSpec:', msg)
        }
        expect($scope.log('ocApp')).toEqual(log('ocApp'));
    });

    it('3rd : Should be 10 records per page', function() {
        expect($scope.sectorGridOptions.dataSource.pageSize).toBe(10);
    });

    it('4th : Should have new sector mapping button', function() {
        expect($scope.sectorGridOptions.toolbar[3].text).toContain('NEW SECTOR MAPPING');
    });
});

describe('Unit testing service: TaxService', function() {
    var $scope;

    beforeEach(module('ocApp.services'));

    beforeEach(inject(function($controller, $rootScope, taxService) {
        $scope = $rootScope.$new();
        spyOn(taxService, 'getTaxes')
            .and.callFake(function() {
                return 'getTaxes is called';
            });
        spyOn(taxService, 'updateTax')
            .and.callFake(function() {
                return 'updateTax fineshed';
            });
    }));

    it('1st : Should call function getTaxes and response', inject(function(taxService) {
        expect(taxService.getTaxes()).toEqual('getTaxes is called');
    }));

    it('2nd : Should call function updateTax and fineshed', inject(function(taxService) {
        expect(taxService.updateTax()).toEqual('updateTax fineshed');
    }));
});

describe('Unit testing service: StateService', function() {
    var response = false,
        myStatus = 404,
        stateReqURL = '/';

    it('1st : Should call method getStates: response be true and status be 200', inject(function($http, $httpBackend) {
        $http.get(stateReqURL)
            .success(function(data, status, headers, config) {
                response = true;
                myStatus = status;
            })
            .error(function(data, status, headers, config) {
                response = false;
                myStatus = status;
            });

        $httpBackend
            .when('GET', stateReqURL)
            .respond(200, {
                success: true
            });
        $httpBackend.flush();
        expect(response).toBe(true);
        expect(myStatus).toBe(200);
    }));
});

describe('Unit testing service: SectorService', function() {
    var $scope;

    beforeEach(module('ocApp.services'));

    beforeEach(inject(function($controller, $rootScope, sectorService) {
        $scope = $rootScope.$new();
        spyOn(sectorService, 'getSectorMappings')
            .and.callFake(function() {
                return 'getSectorMappings is called';
            });
        spyOn(sectorService, 'getAllSectors')
            .and.callFake(function() {
                return 'getAllSectors is called';
            });
        spyOn(sectorService, 'updateSector')
            .and.callFake(function() {
                return 'updateSector fineshed';
            });
        spyOn(sectorService, 'createSectorMapping')
            .and.callFake(function() {
                return 'create Sector Mapping !';
            });
    }));

    it('1st : Should call function getSectorMappings and response', inject(function(sectorService) {
        expect(sectorService.getSectorMappings()).toEqual('getSectorMappings is called');
    }));

    it('2nd : Should call function getAllSectors and response', inject(function(sectorService) {
        expect(sectorService.getAllSectors()).toEqual('getAllSectors is called');
    }));

    it('3rd : Should call function updateSector and fineshed', inject(function(sectorService) {
        expect(sectorService.updateSector()).toEqual('updateSector fineshed');
    }));

    it('4th : Should call function createSectorMapping and called', inject(function(sectorService) {
        expect(sectorService.createSectorMapping()).toEqual('create Sector Mapping !');
    }));
});
