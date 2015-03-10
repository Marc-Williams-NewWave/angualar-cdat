'use strict';

angular.module('cdatApp').controller('MainController',
		function($scope, Principal) {

			var cdatSampleJSON = {
				"smplList" : [ {
					"id" : {
						"smplTypeCd" : "National",
						"smplId" : 1
					},
					"smplType" : {
						"smplTypeCd" : "National",
						"smplTypeDescTxt" : "National RADV Sample",
						"smpls" : []
					},
					"smplYrNum" : 2013,
					"smplNameTxt" : "NAT 2014 National-Level RADV",
					"maxUpldsPerHccNum" : 10,
					"maxUpldsPerEnrlleeNum" : 100,
					"intkPrvdrTypeDosEdtblInd" : null,
					"planLbryAncmtTxt" : null,
					"teamLbryAncmtTxt" : null,
					"planLbryFtrTxt" : null,
					"teamLbryFtrTxt" : null,
					"smplActvInd" : "Y",
					"creatdByUserId" : 1,
					"creatdByDt" : 1423015624068,
					"mdfydByUserId" : null,
					"mdfydDt" : null,
					"smplOrgUsers" : [],
					"smplEnrlees" : [],
					"smplOrgTypeDocFils" : [],
					"smplUserRoleDocs" : [],
					"smplOrgs" : [],
					"smplMaoCntrctUsers" : [],
					"smplMaoCntrcts" : [],
					"smplUserRoles" : []
				}, {
					"id" : {
						"smplTypeCd" : "Contract",
						"smplId" : 2
					},
					"smplType" : {
						"smplTypeCd" : "Contract",
						"smplTypeDescTxt" : "Contract RADV Sample",
						"smpls" : []
					},
					"smplYrNum" : 2011,
					"smplNameTxt" : "CON 2012 Contract-Level RADV",
					"maxUpldsPerHccNum" : 10,
					"maxUpldsPerEnrlleeNum" : 100,
					"intkPrvdrTypeDosEdtblInd" : null,
					"planLbryAncmtTxt" : null,
					"teamLbryAncmtTxt" : null,
					"planLbryFtrTxt" : null,
					"teamLbryFtrTxt" : null,
					"smplActvInd" : "Y",
					"creatdByUserId" : 1,
					"creatdByDt" : 1454551624068,
					"mdfydByUserId" : null,
					"mdfydDt" : null,
					"smplOrgUsers" : [],
					"smplEnrlees" : [],
					"smplOrgTypeDocFils" : [],
					"smplUserRoleDocs" : [],
					"smplOrgs" : [],
					"smplMaoCntrctUsers" : [],
					"smplMaoCntrcts" : [],
					"smplUserRoles" : []
				} ],
				"indexOfList" : 0,
				"cdatUserId" : 0,
				"cdatUserId1" : null
			};
			
//			console.log(cdatSampleJSON);
//			console.log(cdatSampleJSON.smplList);
//			
//			var i;
//			for(i=0;i < cdatSampleJSON.smplList.length;i++){
//				console.log(cdatSampleJSON.smplList[i].smplNameTxt);
//			}
			$scope.sampleInfo = cdatSampleJSON.smplList;

//			$scope.listOfSamples = [ {
//				samples : [ {
//					"name" : "NAT12"
//				}, {
//					"name" : "NAT13"
//				}, {
//					"name" : "CON11"
//				}, {
//					"name" : "CON12"
//				} ]
//			} ];

			Principal.identity().then(function(account) {
				$scope.account = account;
				$scope.isAuthenticated = Principal.isAuthenticated;
			});
		});
