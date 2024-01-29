import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';

export class EcsFargateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPCを作成
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 2 // 可用性ゾーンの数
    });

    // Fargate Serviceを作成
    const fargateService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'MyFargateService', {
      cluster: new ecs.Cluster(this, 'MyCluster', { vpc }),
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('nginx') // 使用するコンテナイメージ
      }
    });

    // タスク数を設定
    fargateService.targetGroup.configureHealthCheck({
      path: '/index.html' // ヘルスチェックのパス
    });
  }
}

const app = new cdk.App();
new EcsFargateStack(app, 'EcsFargateStack');
