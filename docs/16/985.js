{"name":"iOS 获取 Wifi SSID列表代码","work":"t","_t":1562877580626,"_id":"3QgBUpRveKeYVG0u","assigner":"Forest","detail":"iOS 获取 Wifi SSID列表代码；\n\n     导入头文件：\n\n     #import <NetworkExtension/NetworkExtension.h>  \n\n\n\n      //实现部分\n\n- (void)getWifi_SSID_List {\n if (![[[UIDevice currentDevice] systemVersion] floatValue] >= 9.0) {return;}\n dispatch_queue_t queue = dispatch_queue_create(\"com.leopardpan.HotspotHelper\", 0);\n [NEHotspotHelper registerWithOptions:nil queue:queue handler: ^(NEHotspotHelperCommand * cmd) {\n  //kNEHotspotHelperCommandTypeFilterScanList：表示扫描到 Wifi 列表信息。\n  if(cmd.commandType == kNEHotspotHelperCommandTypeFilterScanList) {\n   //NEHotspotNetwork 里有如下信息：SSID：Wifi 名称；BSSID：站点的 MAC 地址；signalStrength： Wifi信号强度，该值在0.0-1.0之间；secure：网络是否安全 (不需要密码的 Wifi，该值为 false)；autoJoined： 设备是否自动连接该 Wifi，目前测试自动连接以前连过的 Wifi 的也为 false ；justJoined：网络是否刚刚加入；chosenHelper：HotspotHelper是否为网络的所选助手\n   for (NEHotspotNetwork* network  in cmd.networkList) {\n    NSLog(@“+++++%@“,network.SSID);\n   }\n  }\n }];\n}","end":1562877580626,"ok":true,"received":true}