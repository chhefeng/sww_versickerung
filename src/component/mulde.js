import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import DataGrid, { TextEditor } from 'react-data-grid'
import styled from 'styled-components'
import { Form, Button, Input, Row, Col } from 'antd'

import Handsontable from 'handsontable'
import { HotTable, HotColumn } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'

function Mulde() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    const DataGridContainer = styled.div`
        ${'' /* width: 50%; */}
    `
    const Container = styled.div`
        padding: 50px;
    `

    const AntForm = styled(Form)`
        max-width: 100%;
        border: 2px blue solid;
        box-sizing: border-box;
    `

    const VCol = styled(Col)`
        padding: 50px 50px;
        border: 2px blue solid;
    `

    function MyGrid() {
        const columns = [
            { key: 'id', name: 'ID', editor: TextEditor },
            { key: 'title', name: 'Title', editor: TextEditor },
        ]

        const initialRows = [{ id: 0, title: 'Example' }, {}, {}, {}, {}, {}]

        const [rows, setRows] = useState(initialRows)

        return <DataGrid columns={columns} rows={rows} onRowsChange={setRows} />
    }

    const onFinish = (values) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    registerAllModules()

    const hotData = Handsontable.helper.createEmptySpreadsheetData(12, 3)
    // const hotData = [
    //     ['', 'Tesla', 'Volvo', 'Toyota', 'Honda'],
    //     ['2020', 10, 11, 12, 13],
    //     ['2021', 20, 11, 14, 13],
    //     ['2022', 30, 15, 12, 13],
    // ]

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6, offset: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
    }

    return (
        <Container className="App">
            <AntForm
                {...formItemLayout}
                name="basic"
                labelAlign="right"
                // labelCol={{
                //     span: 8,
                // }}
                // wrapperCol={{
                //     span: 16,
                // }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                {/* 1. part of required input data */}

                <Row>
                    <VCol span={24} lg={12}>
                        <Form.Item
                            label="Einzugsgebietsfläche"
                            name="gesametFlaeche"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Einzugsgebietsfläche!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Abflussbeiwert"
                            name="abflussbeiwert"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Abflussbeiwert!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Versickerungsfläche"
                            name="versickerungsflaeche"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Versickerungsfläche!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        {/* 2. part of required input data */}
                        <Form.Item
                            label="Durchlässigkeitsbeiwert"
                            name="durchlaessigkeitsbeiwert"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Durchlässigkeitsbeiwert!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Regenhäufigkeit"
                            name="Regenhäufigkeit"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Regenhäufigkeit!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Zuschlagsfaktor"
                            name="Zuschlagsfaktor"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Zuschlagsfaktor!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                    </VCol>

                    <VCol span={24} lg={12}>
                        {/* 3. part of required input data */}
                        {/* <DataGridContainer>
                            <MyGrid />
                        </DataGridContainer> */}
                        <HotTable
                            data={hotData}
                            colHeaders={true}
                            // rowHeaders={true}
                            width="auto"
                            height="auto"
                            licenseKey="non-commercial-and-evaluation">
                            <HotColumn title="Dauerstufe" width={100} />
                            <HotColumn title="Regenspende" width={100} />
                            <HotColumn
                                title="erforderliches Speichervolumen"
                                width={200}
                            />
                        </HotTable>
                        {/* <input type="submit" /> */}
                    </VCol>
                </Row>

                <Row>
                    <VCol span={12}>
                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 24,
                            }}>
                            <Button type="primary" htmlType="submit" block>
                                Berechnung
                            </Button>
                        </Form.Item>
                    </VCol>
                </Row>
            </AntForm>

            {/* <Form onSubmit={handleSubmit(onSubmit)}></Form> */}
        </Container>
    )
}

export default Mulde
