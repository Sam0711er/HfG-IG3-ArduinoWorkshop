//
//  ViewController.swift
//  SerialSwift
//
//  Created by Sam Eckert on 31.10.18.
//  Copyright © 2018 Sam0711er. All rights reserved.
//

import Cocoa
import ORSSerial

class ViewController: NSViewController, ORSSerialPortDelegate, NSUserNotificationCenterDelegate {
   
    

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        print("setup")
        let nc = NotificationCenter.default
//        nc.addObserver(self, selector: #selector(serialPortsWereConnected(_:)), name: NSNotification.Name.ORSSerialPortsWereConnected, object: nil)
//        nc.addObserver(self, selector: #selector(serialPortsWereDisconnected(_:)), name: NSNotification.Name.ORSSerialPortsWereDisconnected, object: nil)
//        
        NSUserNotificationCenter.default.delegate = self as! NSUserNotificationCenterDelegate
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }
 


    // MARK: - Serial Port
    var serialPort: ORSSerialPort? {
        didSet {
            oldValue?.close()
            oldValue?.delegate = nil
            serialPort?.delegate = self
        }
    }

    func openOrClosePort(sender: AnyObject) {
        if let port = self.serialPort {
            if (port.isOpen) {
                port.close()
            } else {
                port.open()
//                self.receivedDataTextView.textStorage?.mutableString.setString("");
            }
        }
    }
    
    
    func serialPort(_ serialPort: ORSSerialPort, didReceive data: Data) {
        print(data)
    }
    
    func serialPortWasClosed(_ serialPort: ORSSerialPort) {
        print("Port was closed")
    }
    
    func serialPortWasRemoved(fromSystem serialPort: ORSSerialPort) {
        print("Port was removed")
    }
    
    func serialPortWasOpened(_ serialPort: ORSSerialPort) {
        print("Port was opened")
    }
    
    func serialPort(serialPort: ORSSerialPort, didEncounterError error: NSError) {
        print("SerialPort \(serialPort) encountered an error: \(error)")
    }
    
    // MARK: - Notifications
    
    @objc func serialPortsWereConnected(notification: NSNotification) {
        if let userInfo = notification.userInfo {
            let connectedPorts = userInfo[ORSConnectedSerialPortsKey] as! [ORSSerialPort]
            print("Ports were connected: \(connectedPorts)")
//            self.postUserNotificationForConnectedPorts(connectedPorts)
        }
    }
    
    @objc func serialPortsWereDisconnected(notification: NSNotification) {
        if let userInfo = notification.userInfo {
            let disconnectedPorts: [ORSSerialPort] = userInfo[ORSDisconnectedSerialPortsKey] as! [ORSSerialPort]
            print("Ports were disconnected: \(disconnectedPorts)")
//            self.postUserNotificationForDisconnectedPorts(disconnectedPorts)
        }
    }
}

