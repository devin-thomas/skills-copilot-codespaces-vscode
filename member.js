function skillsMember() 
{
    return
    {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html'
        controller: 'SkillsMemberController',
        controllerAs: 'vm'm
        bindToController: true
        scope:
        {
            member: '='
        }
    };
} 