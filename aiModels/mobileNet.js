module.export ={
    "modelTopology": {
        "keras_version": "2.1.4",
        "model_config": {
            "class_name": "Model",
            "config": {
                "layers": [
                    { "class_name": "InputLayer", "inbound_nodes": [], "config": { "dtype": "float32", "batch_input_shape": [null, 224, 224, 3], "name": "input_1", "sparse": false }, "name": "input_1" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["input_1", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv1",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [2, 2],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 8,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv1"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv1", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv1_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv1_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv1_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv1_relu" }, "name": "conv1_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv1_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_1",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_1"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_1", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_1_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_1_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_1_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_1_relu" }, "name": "conv_dw_1_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_1_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_1",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 16,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_1"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_1", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_1_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_1_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_1_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_1_relu" }, "name": "conv_pw_1_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_1_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_2",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [2, 2],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_2"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_2", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_2_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_2_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_2_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_2_relu" }, "name": "conv_dw_2_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_2_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_2",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 32,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_2"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_2", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_2_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_2_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_2_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_2_relu" }, "name": "conv_pw_2_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_2_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_3",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_3"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_3", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_3_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_3_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_3_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_3_relu" }, "name": "conv_dw_3_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_3_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_3",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 32,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_3"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_3", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_3_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_3_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_3_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_3_relu" }, "name": "conv_pw_3_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_3_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_4",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [2, 2],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_4"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_4", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_4_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_4_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_4_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_4_relu" }, "name": "conv_dw_4_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_4_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_4",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 64,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_4"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_4", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_4_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_4_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_4_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_4_relu" }, "name": "conv_pw_4_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_4_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_5",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_5"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_5", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_5_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_5_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_5_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_5_relu" }, "name": "conv_dw_5_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_5_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_5",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 64,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_5"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_5", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_5_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_5_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_5_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_5_relu" }, "name": "conv_pw_5_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_5_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_6",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [2, 2],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_6"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_6", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_6_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_6_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_6_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_6_relu" }, "name": "conv_dw_6_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_6_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_6",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 128,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_6"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_6", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_6_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_6_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_6_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_6_relu" }, "name": "conv_pw_6_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_6_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_7",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_7"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_7", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_7_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_7_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_7_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_7_relu" }, "name": "conv_dw_7_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_7_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_7",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 128,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_7"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_7", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_7_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_7_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_7_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_7_relu" }, "name": "conv_pw_7_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_7_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_8",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_8"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_8", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_8_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_8_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_8_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_8_relu" }, "name": "conv_dw_8_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_8_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_8",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 128,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_8"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_8", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_8_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_8_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_8_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_8_relu" }, "name": "conv_pw_8_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_8_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_9",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_9"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_9", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_9_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_9_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_9_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_9_relu" }, "name": "conv_dw_9_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_9_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_9",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 128,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_9"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_9", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_9_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_9_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_9_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_9_relu" }, "name": "conv_pw_9_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_9_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_10",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_10"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_10", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_10_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_10_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_10_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_10_relu" }, "name": "conv_dw_10_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_10_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_10",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 128,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_10"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_10", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_10_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_10_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_10_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_10_relu" }, "name": "conv_pw_10_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_10_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_11",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_11"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_11", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_11_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_11_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_11_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_11_relu" }, "name": "conv_dw_11_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_11_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_11",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 128,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_11"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_11", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_11_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_11_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_11_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_11_relu" }, "name": "conv_pw_11_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_11_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_12",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [2, 2],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_12"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_12", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_12_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_12_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_12_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_12_relu" }, "name": "conv_dw_12_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_12_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_12",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 256,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_12"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_12", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_12_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_12_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_12_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_12_relu" }, "name": "conv_pw_12_relu" },
                    {
                        "class_name": "DepthwiseConv2D",
                        "inbound_nodes": [[["conv_pw_12_relu", 0, 0, {}]]],
                        "config": {
                            "padding": "same",
                            "depth_multiplier": 1,
                            "name": "conv_dw_13",
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "depthwise_constraint": null,
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "depthwise_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "depthwise_regularizer": null,
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [3, 3]
                        },
                        "name": "conv_dw_13"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_dw_13", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_dw_13_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_dw_13_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_dw_13_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_dw_13_relu" }, "name": "conv_dw_13_relu" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["conv_dw_13_relu", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_pw_13",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 256,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": false,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_pw_13"
                    },
                    {
                        "class_name": "BatchNormalization",
                        "inbound_nodes": [[["conv_pw_13", 0, 0, {}]]],
                        "config": {
                            "gamma_initializer": { "class_name": "Ones", "config": {} },
                            "moving_mean_initializer": { "class_name": "Zeros", "config": {} },
                            "name": "conv_pw_13_bn",
                            "epsilon": 0.001,
                            "trainable": true,
                            "center": true,
                            "moving_variance_initializer": { "class_name": "Ones", "config": {} },
                            "beta_initializer": { "class_name": "Zeros", "config": {} },
                            "scale": true,
                            "gamma_regularizer": null,
                            "gamma_constraint": null,
                            "beta_constraint": null,
                            "beta_regularizer": null,
                            "momentum": 0.99,
                            "axis": -1
                        },
                        "name": "conv_pw_13_bn"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_pw_13_bn", 0, 0, {}]]], "config": { "activation": "relu6", "trainable": true, "name": "conv_pw_13_relu" }, "name": "conv_pw_13_relu" },
                    {
                        "class_name": "GlobalAveragePooling2D",
                        "inbound_nodes": [[["conv_pw_13_relu", 0, 0, {}]]],
                        "config": { "trainable": true, "name": "global_average_pooling2d_1", "data_format": "channels_last" },
                        "name": "global_average_pooling2d_1"
                    },
                    { "class_name": "Reshape", "inbound_nodes": [[["global_average_pooling2d_1", 0, 0, {}]]], "config": { "target_shape": [1, 1, 256], "trainable": true, "name": "reshape_1" }, "name": "reshape_1" },
                    { "class_name": "Dropout", "inbound_nodes": [[["reshape_1", 0, 0, {}]]], "config": { "rate": 0.001, "noise_shape": null, "trainable": true, "seed": null, "name": "dropout" }, "name": "dropout" },
                    {
                        "class_name": "Conv2D",
                        "inbound_nodes": [[["dropout", 0, 0, {}]]],
                        "config": {
                            "kernel_initializer": { "class_name": "VarianceScaling", "config": { "distribution": "uniform", "scale": 1.0, "seed": null, "mode": "fan_avg" } },
                            "name": "conv_preds",
                            "kernel_constraint": null,
                            "bias_regularizer": null,
                            "bias_constraint": null,
                            "activation": "linear",
                            "trainable": true,
                            "data_format": "channels_last",
                            "padding": "same",
                            "strides": [1, 1],
                            "dilation_rate": [1, 1],
                            "kernel_regularizer": null,
                            "filters": 1000,
                            "bias_initializer": { "class_name": "Zeros", "config": {} },
                            "use_bias": true,
                            "activity_regularizer": null,
                            "kernel_size": [1, 1]
                        },
                        "name": "conv_preds"
                    },
                    { "class_name": "Activation", "inbound_nodes": [[["conv_preds", 0, 0, {}]]], "config": { "activation": "softmax", "trainable": true, "name": "act_softmax" }, "name": "act_softmax" },
                    { "class_name": "Reshape", "inbound_nodes": [[["act_softmax", 0, 0, {}]]], "config": { "target_shape": [1000], "trainable": true, "name": "reshape_2" }, "name": "reshape_2" }
                ],
                "input_layers": [["input_1", 0, 0]],
                "name": "mobilenet_0.25_224",
                "output_layers": [["reshape_2", 0, 0]]
            }
        },
        "backend": "tensorflow"
    },
    "weightsManifest": [
        { "paths": ["group1-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 3, 8], "name": "conv1/kernel" }] },
        {
            "paths": ["group2-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [8], "name": "conv1_bn/gamma" },
                { "dtype": "float32", "shape": [8], "name": "conv1_bn/beta" },
                { "dtype": "float32", "shape": [8], "name": "conv1_bn/moving_mean" },
                { "dtype": "float32", "shape": [8], "name": "conv1_bn/moving_variance" }
            ]
        },
        { "paths": ["group3-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 8, 1], "name": "conv_dw_1/depthwise_kernel" }] },
        { "paths": ["group4-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 128, 1], "name": "conv_dw_10/depthwise_kernel" }] },
        {
            "paths": ["group5-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_dw_10_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_10_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_10_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_10_bn/moving_variance" }
            ]
        },
        { "paths": ["group6-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 128, 1], "name": "conv_dw_11/depthwise_kernel" }] },
        {
            "paths": ["group7-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_dw_11_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_11_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_11_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_11_bn/moving_variance" }
            ]
        },
        { "paths": ["group8-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 128, 1], "name": "conv_dw_12/depthwise_kernel" }] },
        {
            "paths": ["group9-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_dw_12_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_12_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_12_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_12_bn/moving_variance" }
            ]
        },
        { "paths": ["group10-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 256, 1], "name": "conv_dw_13/depthwise_kernel" }] },
        {
            "paths": ["group11-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [256], "name": "conv_dw_13_bn/gamma" },
                { "dtype": "float32", "shape": [256], "name": "conv_dw_13_bn/beta" },
                { "dtype": "float32", "shape": [256], "name": "conv_dw_13_bn/moving_mean" },
                { "dtype": "float32", "shape": [256], "name": "conv_dw_13_bn/moving_variance" }
            ]
        },
        {
            "paths": ["group12-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [8], "name": "conv_dw_1_bn/gamma" },
                { "dtype": "float32", "shape": [8], "name": "conv_dw_1_bn/beta" },
                { "dtype": "float32", "shape": [8], "name": "conv_dw_1_bn/moving_mean" },
                { "dtype": "float32", "shape": [8], "name": "conv_dw_1_bn/moving_variance" }
            ]
        },
        { "paths": ["group13-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 16, 1], "name": "conv_dw_2/depthwise_kernel" }] },
        {
            "paths": ["group14-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [16], "name": "conv_dw_2_bn/gamma" },
                { "dtype": "float32", "shape": [16], "name": "conv_dw_2_bn/beta" },
                { "dtype": "float32", "shape": [16], "name": "conv_dw_2_bn/moving_mean" },
                { "dtype": "float32", "shape": [16], "name": "conv_dw_2_bn/moving_variance" }
            ]
        },
        { "paths": ["group15-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 32, 1], "name": "conv_dw_3/depthwise_kernel" }] },
        {
            "paths": ["group16-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [32], "name": "conv_dw_3_bn/gamma" },
                { "dtype": "float32", "shape": [32], "name": "conv_dw_3_bn/beta" },
                { "dtype": "float32", "shape": [32], "name": "conv_dw_3_bn/moving_mean" },
                { "dtype": "float32", "shape": [32], "name": "conv_dw_3_bn/moving_variance" }
            ]
        },
        { "paths": ["group17-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 32, 1], "name": "conv_dw_4/depthwise_kernel" }] },
        {
            "paths": ["group18-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [32], "name": "conv_dw_4_bn/gamma" },
                { "dtype": "float32", "shape": [32], "name": "conv_dw_4_bn/beta" },
                { "dtype": "float32", "shape": [32], "name": "conv_dw_4_bn/moving_mean" },
                { "dtype": "float32", "shape": [32], "name": "conv_dw_4_bn/moving_variance" }
            ]
        },
        { "paths": ["group19-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 64, 1], "name": "conv_dw_5/depthwise_kernel" }] },
        {
            "paths": ["group20-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [64], "name": "conv_dw_5_bn/gamma" },
                { "dtype": "float32", "shape": [64], "name": "conv_dw_5_bn/beta" },
                { "dtype": "float32", "shape": [64], "name": "conv_dw_5_bn/moving_mean" },
                { "dtype": "float32", "shape": [64], "name": "conv_dw_5_bn/moving_variance" }
            ]
        },
        { "paths": ["group21-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 64, 1], "name": "conv_dw_6/depthwise_kernel" }] },
        {
            "paths": ["group22-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [64], "name": "conv_dw_6_bn/gamma" },
                { "dtype": "float32", "shape": [64], "name": "conv_dw_6_bn/beta" },
                { "dtype": "float32", "shape": [64], "name": "conv_dw_6_bn/moving_mean" },
                { "dtype": "float32", "shape": [64], "name": "conv_dw_6_bn/moving_variance" }
            ]
        },
        { "paths": ["group23-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 128, 1], "name": "conv_dw_7/depthwise_kernel" }] },
        {
            "paths": ["group24-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_dw_7_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_7_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_7_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_7_bn/moving_variance" }
            ]
        },
        { "paths": ["group25-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 128, 1], "name": "conv_dw_8/depthwise_kernel" }] },
        {
            "paths": ["group26-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_dw_8_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_8_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_8_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_8_bn/moving_variance" }
            ]
        },
        { "paths": ["group27-shard1of1"], "weights": [{ "dtype": "float32", "shape": [3, 3, 128, 1], "name": "conv_dw_9/depthwise_kernel" }] },
        {
            "paths": ["group28-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_dw_9_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_9_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_9_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_dw_9_bn/moving_variance" }
            ]
        },
        {
            "paths": ["group29-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [1, 1, 256, 1000], "name": "conv_preds/kernel" },
                { "dtype": "float32", "shape": [1000], "name": "conv_preds/bias" }
            ]
        },
        { "paths": ["group30-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 8, 16], "name": "conv_pw_1/kernel" }] },
        { "paths": ["group31-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 128, 128], "name": "conv_pw_10/kernel" }] },
        {
            "paths": ["group32-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_pw_10_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_10_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_10_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_10_bn/moving_variance" }
            ]
        },
        { "paths": ["group33-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 128, 128], "name": "conv_pw_11/kernel" }] },
        {
            "paths": ["group34-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_pw_11_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_11_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_11_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_11_bn/moving_variance" }
            ]
        },
        { "paths": ["group35-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 128, 256], "name": "conv_pw_12/kernel" }] },
        {
            "paths": ["group36-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [256], "name": "conv_pw_12_bn/gamma" },
                { "dtype": "float32", "shape": [256], "name": "conv_pw_12_bn/beta" },
                { "dtype": "float32", "shape": [256], "name": "conv_pw_12_bn/moving_mean" },
                { "dtype": "float32", "shape": [256], "name": "conv_pw_12_bn/moving_variance" }
            ]
        },
        { "paths": ["group37-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 256, 256], "name": "conv_pw_13/kernel" }] },
        {
            "paths": ["group38-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [256], "name": "conv_pw_13_bn/gamma" },
                { "dtype": "float32", "shape": [256], "name": "conv_pw_13_bn/beta" },
                { "dtype": "float32", "shape": [256], "name": "conv_pw_13_bn/moving_mean" },
                { "dtype": "float32", "shape": [256], "name": "conv_pw_13_bn/moving_variance" }
            ]
        },
        {
            "paths": ["group39-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [16], "name": "conv_pw_1_bn/gamma" },
                { "dtype": "float32", "shape": [16], "name": "conv_pw_1_bn/beta" },
                { "dtype": "float32", "shape": [16], "name": "conv_pw_1_bn/moving_mean" },
                { "dtype": "float32", "shape": [16], "name": "conv_pw_1_bn/moving_variance" }
            ]
        },
        { "paths": ["group40-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 16, 32], "name": "conv_pw_2/kernel" }] },
        {
            "paths": ["group41-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [32], "name": "conv_pw_2_bn/gamma" },
                { "dtype": "float32", "shape": [32], "name": "conv_pw_2_bn/beta" },
                { "dtype": "float32", "shape": [32], "name": "conv_pw_2_bn/moving_mean" },
                { "dtype": "float32", "shape": [32], "name": "conv_pw_2_bn/moving_variance" }
            ]
        },
        { "paths": ["group42-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 32, 32], "name": "conv_pw_3/kernel" }] },
        {
            "paths": ["group43-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [32], "name": "conv_pw_3_bn/gamma" },
                { "dtype": "float32", "shape": [32], "name": "conv_pw_3_bn/beta" },
                { "dtype": "float32", "shape": [32], "name": "conv_pw_3_bn/moving_mean" },
                { "dtype": "float32", "shape": [32], "name": "conv_pw_3_bn/moving_variance" }
            ]
        },
        { "paths": ["group44-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 32, 64], "name": "conv_pw_4/kernel" }] },
        {
            "paths": ["group45-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [64], "name": "conv_pw_4_bn/gamma" },
                { "dtype": "float32", "shape": [64], "name": "conv_pw_4_bn/beta" },
                { "dtype": "float32", "shape": [64], "name": "conv_pw_4_bn/moving_mean" },
                { "dtype": "float32", "shape": [64], "name": "conv_pw_4_bn/moving_variance" }
            ]
        },
        { "paths": ["group46-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 64, 64], "name": "conv_pw_5/kernel" }] },
        {
            "paths": ["group47-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [64], "name": "conv_pw_5_bn/gamma" },
                { "dtype": "float32", "shape": [64], "name": "conv_pw_5_bn/beta" },
                { "dtype": "float32", "shape": [64], "name": "conv_pw_5_bn/moving_mean" },
                { "dtype": "float32", "shape": [64], "name": "conv_pw_5_bn/moving_variance" }
            ]
        },
        { "paths": ["group48-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 64, 128], "name": "conv_pw_6/kernel" }] },
        {
            "paths": ["group49-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_pw_6_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_6_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_6_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_6_bn/moving_variance" }
            ]
        },
        { "paths": ["group50-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 128, 128], "name": "conv_pw_7/kernel" }] },
        {
            "paths": ["group51-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_pw_7_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_7_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_7_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_7_bn/moving_variance" }
            ]
        },
        { "paths": ["group52-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 128, 128], "name": "conv_pw_8/kernel" }] },
        {
            "paths": ["group53-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_pw_8_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_8_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_8_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_8_bn/moving_variance" }
            ]
        },
        { "paths": ["group54-shard1of1"], "weights": [{ "dtype": "float32", "shape": [1, 1, 128, 128], "name": "conv_pw_9/kernel" }] },
        {
            "paths": ["group55-shard1of1"],
            "weights": [
                { "dtype": "float32", "shape": [128], "name": "conv_pw_9_bn/gamma" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_9_bn/beta" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_9_bn/moving_mean" },
                { "dtype": "float32", "shape": [128], "name": "conv_pw_9_bn/moving_variance" }
            ]
        }
    ]
}
