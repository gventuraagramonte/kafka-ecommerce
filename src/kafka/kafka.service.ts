import { Injectable } from '@nestjs/common';
import { Kafka, Producer, Consumer } from 'kafkajs';

@Injectable()
export class KafkaService {
    private kafka: Kafka
    private producer: Producer
    private consumer: Consumer

    constructor() {
        this.kafka = new Kafka({
            clientId: '',
            brokers: ['']
        })

        this.producer = this.kafka.producer()
        this.consumer = this.kafka.consumer({ groupId: '' })
    }

    async connect() {
        await this.producer.connect()
        await this.consumer.connect()
    }

    async publicMessage(topic: string, message: string) {
        await this.producer.send({
            topic,
            messages: [{ value: message }]
        })
    }

    async subscribeToTopic(topic: string, callback: (message: string) => void) {
        await this.consumer.subscribe({ topic })
        await this.consumer.run({
            eachMessage: async ({ message }) => {
                callback(message.value.toString())
            }
        })
    }

    async disconnected() {
        await this.producer.disconnect()
        await this.consumer.disconnect()
    }
}
