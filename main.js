const {InstanceBase, Regex, runEntrypoint, InstanceStatus} = require('@companion-module/base')
const UpgradeScripts = require('./upgrades')
require('./presets');

class ModuleInstance extends InstanceBase {
  constructor(internal) {
    super(internal)
  }

  isInitialized = false

  async init(config) {
    this.config = config

    this.log('debug', `Start logging,`)

    this.updateStatus(InstanceStatus.Ok)
    this.isInitialized = true

    this.log('debug', `Done init.`)

  }

  // When module gets deleted
  async destroy() {
    this.log('debug', 'destroy')
  }

  async configUpdated(config) {
    this.config = config
  }

  async destroy() {
    this.isInitialized = false
  }

  // Return config fields for web config
  getConfigFields() {
    return []
  }
}

runEntrypoint(ModuleInstance, UpgradeScripts)
