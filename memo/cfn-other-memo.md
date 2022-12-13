# CFn その他のメモ
---

- 次の時、論理名が重複しているのに、なぜかエラーが出ないままデプロイが完了する（2022/12/1時点）
```
  # Management Server -> Internal LB
  IngressInternalLoadBalancerFromManagement:
    Type: AWS::EC2::SecurityGroupIngress
    Properties:
      Description: HTTP for Management Server
      IpProtocol: tcp
      FromPort: 80
      ToPort: 80
      SourceSecurityGroupId: !GetAtt SecurityGroupManagementServer.GroupId
      GroupId: !GetAtt SecurityGroupInternalLoadBalancer.GroupId

  # Management Server -> Internal LB
  IngressInternalLoadBalancerFromManagement:
    Type: AWS::EC2::SecurityGroupIngress
    Properties:
      Description: Test port for Management Server
      IpProtocol: tcp
      FromPort: 10080
      ToPort: 10080
      SourceSecurityGroupId: !GetAtt SecurityGroupManagementServer.GroupId
      GroupId: !GetAtt SecurityGroupInternalLoadBalancer.GroupId
```