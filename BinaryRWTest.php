<?php

require_once(dirname(__FILE__)."/../src/dependencies.php");

class BinaryRWTest extends PHPUnit_Framework_TestCase{
	public function testRead(){
		$this->assertTrue(Utils::readTriad("\x02\x01\x03") === 131331, "Utils::readTriad");
		$this->assertTrue(Utils::readInt("\xff\x02\x01\x03") === -16645885, "Utils::readInt");
		$this->assertTrue(abs(Utils::readFloat("\x49\x02\x01\x03") - 532496.1875) < 0.0001, "Utils::readFloat");
		$this->assertTrue(abs(Utils::readDouble("\x41\x02\x03\x04\x05\x06\x07\x08") - 147552.5024529) < 0.0001, "Utils::readDouble");
		$this->assertTrue(Utils::readLong("\x41\x02\x03\x04\x05\x06\x07\x08") === "4684309878217770760", "Utils::readLong");
	}
}