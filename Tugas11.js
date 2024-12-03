class Payment {
  processPayment(amount) {

  }
}

class Notification {
  sendNotification(message) {

  }
}

class CreditCardPayment extends Payment {
  processPayment(amount) {
    console.log(`Pembayaran sebesar Rp${amount} menggunakan kartu kredit berhasil`);
  }
}

class EwalletPayment extends Payment {
  processPayment(amount) {
    console.log(`Pembayaran sebesar Rp${amount} menggunakan E-Wallet berhasil`);
  }
}

class BankTransferPayment extends Payment {
  processPayment(amount) {
    console.log(`Pembayaran sebesar Rp${amount} melalui transfer bank berasil`);
  }
}

class EmailNotification extends Notification {
  sendNotification(message) {
    console.log(`Notifikasi Email: ${message}`);
  }
}

class SMSNotification extends Notification {
  sendNotification(message) {
    console.log(`Notifikasi SMS: ${message}`);
  }
}

class PaymentProcessor {
  constructor(paymentMethod, notificationMethod) {
    this.paymentMethod = paymentMethod; 
    this.notificationMethod = notificationMethod; 
  }

  process(amount) {
    this.paymentMethod.processPayment(amount);
    this.notificationMethod.sendNotification(
      `Your payment of $${amount} was successful.`
    );
  }
}

const creditCardPayment = new CreditCardPayment(); 
const emailNotification = new EmailNotification(); 

const processor1 = new PaymentProcessor(creditCardPayment, emailNotification);
processor1.process(100); 
